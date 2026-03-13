import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
import type { Id } from './_generated/dataModel';
import { requireAuth } from './lib/auth';

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    await requireAuth(ctx, userId);
    const goals = await ctx.db
      .query('goals')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();

    return await Promise.all(
      goals.map(async (goal) => {
        let nextDue: string | undefined;
        if (goal.linkedRecurringId) {
          const recurring = await ctx.db.get(goal.linkedRecurringId);
          nextDue = recurring?.nextDue;
        }
        return { ...goal, nextDue };
      })
    );
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    icon: v.string(),
    target: v.number(),
    color: v.string(),
    isRecurring: v.optional(v.boolean()),
    linkedRecurringId: v.optional(v.id('recurring_payments')),
  },
  handler: async (ctx, { userId, name, icon, target, color, isRecurring, linkedRecurringId }) => {
    await requireAuth(ctx, userId);
    return await ctx.db.insert('goals', {
      userId,
      name,
      icon,
      target,
      saved: 0,
      color,
      status: 'active',
      ...(isRecurring ? { isRecurring } : {}),
      ...(linkedRecurringId ? { linkedRecurringId } : {}),
    });
  },
});

export const addContribution = mutation({
  args: {
    userId: v.string(),
    goalId: v.id('goals'),
    amount: v.number(),
  },
  handler: async (ctx, { userId, goalId, amount }) => {
    await requireAuth(ctx, userId);
    const goal = await ctx.db.get(goalId);
    if (!goal) throw new Error('Goal not found');

    const prefs = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();
    if (prefs) {
      await ctx.db.patch(prefs._id, {
        overallBalance: (prefs.overallBalance ?? 0) - amount,
      });
    }

    await ctx.db.patch(goalId, { saved: goal.saved + amount });

    const today = new Date().toISOString().slice(0, 10);
    await ctx.db.insert('goal_contributions', { goalId, userId, amount, date: today });
  },
});

export const listContributions = query({
  args: { goalId: v.id('goals') },
  handler: async (ctx, { goalId }) => {
    const goal = await ctx.db.get(goalId);
    if (!goal) return [];
    await requireAuth(ctx, goal.userId);
    const contributions = await ctx.db
      .query('goal_contributions')
      .withIndex('by_goal', (q) => q.eq('goalId', goalId))
      .collect();
    return contributions.sort((a, b) => b.date.localeCompare(a.date));
  },
});

export const markPaid = mutation({
  args: { id: v.id('goals'), userId: v.string() },
  handler: async (ctx, { id, userId }) => {
    await requireAuth(ctx, userId);
    const goal = await ctx.db.get(id);
    if (!goal) throw new Error('Goal not found');

    const today = new Date().toISOString().slice(0, 10);

    let title = goal.name;
    let categoryId: Id<'categories'> | undefined;

    if (goal.linkedRecurringId) {
      const recurring = await ctx.db.get(goal.linkedRecurringId);
      if (recurring) {
        title = recurring.name;
        categoryId = recurring.categoryId as Id<'categories'> | undefined;

        const [y, m, d] = recurring.nextDue.split('-');
        const nextDue = `${Number(y) + 1}-${m}-${d}`;
        await ctx.db.patch(recurring._id, { nextDue, lastProcessed: today });
      }
    }

    await ctx.db.insert('transactions', {
      userId,
      title,
      amount: -goal.target,
      note: 'Paid from savings goal',
      date: today,
      paidFromGoalId: id,
      ...(categoryId ? { categoryId } : {}),
    });

    await ctx.db.patch(id, { saved: 0, paymentDue: false });
  },
});

export const markCompleted = mutation({
  args: { id: v.id('goals') },
  handler: async (ctx, { id }) => {
    const goal = await ctx.db.get(id);
    if (!goal) return;
    await requireAuth(ctx, goal.userId);
    const today = new Date().toISOString().slice(0, 10);
    await ctx.db.patch(id, { status: 'completed', completedAt: today });
  },
});

export const remove = mutation({
  args: {
    id: v.id('goals'),
    userId: v.string(),
  },
  handler: async (ctx, { id, userId }) => {
    await requireAuth(ctx, userId);
    const goal = await ctx.db.get(id);
    if (!goal) return;

    if (goal.saved > 0) {
      const prefs = await ctx.db
        .query('user_preferences')
        .withIndex('by_user', (q) => q.eq('userId', userId))
        .first();
      if (prefs) {
        await ctx.db.patch(prefs._id, {
          overallBalance: (prefs.overallBalance ?? 0) + goal.saved,
        });
      }
    }

    if (goal.linkedRecurringId) {
      await ctx.db.patch(goal.linkedRecurringId, { linkedGoalId: undefined });
    }

    const contributions = await ctx.db
      .query('goal_contributions')
      .withIndex('by_goal', (q) => q.eq('goalId', id))
      .collect();
    await Promise.all(contributions.map((c) => ctx.db.delete(c._id)));

    await ctx.db.delete(id);
  },
});
