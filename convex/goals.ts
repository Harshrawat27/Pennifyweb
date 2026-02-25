import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query('goals')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .filter((q) => q.neq(q.field('deleted'), true))
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

    const today = new Date().toISOString().slice(0, 10);

    // Create an expense transaction — deducts from balance
    await ctx.db.insert('transactions', {
      userId,
      title: `Saved for ${goal.name}`,
      amount: -amount,
      note: '',
      date: today,
    });

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

    // Refund whatever was saved back to balance as an income transaction
    if (goal.saved > 0) {
      const today = new Date().toISOString().slice(0, 10);
      await ctx.db.insert('transactions', {
        userId,
        title: `Goal cancelled: ${goal.name}`,
        amount: goal.saved,
        note: '',
        date: today,
      });
    }

    await ctx.db.delete(id);
  },
});
