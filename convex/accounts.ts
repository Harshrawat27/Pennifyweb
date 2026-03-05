import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const list = query({
  args: { userId: v.string(), activeOnly: v.optional(v.boolean()) },
  handler: async (ctx, { userId, activeOnly }) => {
    const accounts = await ctx.db
      .query('accounts')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();
    if (activeOnly) return accounts.filter((a) => a.isActive !== false);
    return accounts;
  },
});

export const toggleActive = mutation({
  args: { id: v.id('accounts'), isActive: v.boolean() },
  handler: async (ctx, { id, isActive }) => {
    await ctx.db.patch(id, { isActive });
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    type: v.string(),
    icon: v.string(),
  },
  handler: async (ctx, { userId, name, type, icon }) => {
    return await ctx.db.insert('accounts', { userId, name, type, icon });
  },
});

export const remove = mutation({
  args: { id: v.id('accounts') },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});

export const getTotalBalance = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    // Use overallBalance from user_preferences as the starting point
    const prefs = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();

    const initialBalance = prefs?.overallBalance ?? 0;

    // Add all transactions on top
    const transactions = await ctx.db
      .query('transactions')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();

    const txSum = transactions.reduce((sum, t) => sum + t.amount, 0);

    return initialBalance + txSum;
  },
});
