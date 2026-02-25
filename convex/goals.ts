import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query('goals')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    icon: v.string(),
    target: v.number(),
    color: v.string(),
  },
  handler: async (ctx, { userId, name, icon, target, color }) => {
    return await ctx.db.insert('goals', {
      userId,
      name,
      icon,
      target,
      saved: 0,
      color,
      status: 'active',
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
    const goal = await ctx.db.get(goalId);
    if (!goal) throw new Error('Goal not found');

    // Deduct directly from overallBalance — no fake transaction
    const prefs = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();
    if (prefs) {
      await ctx.db.patch(prefs._id, {
        overallBalance: (prefs.overallBalance ?? 0) - amount,
      });
    }

    // Update goal saved amount
    await ctx.db.patch(goalId, { saved: goal.saved + amount });
  },
});

export const markCompleted = mutation({
  args: { id: v.id('goals') },
  handler: async (ctx, { id }) => {
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
    const goal = await ctx.db.get(id);
    if (!goal) return;

    // Refund saved amount directly to overallBalance — no fake transaction
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

    await ctx.db.delete(id);
  },
});
