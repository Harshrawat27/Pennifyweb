import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query('accounts')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .filter((q) => q.neq(q.field('deleted'), true))
      .collect();
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    type: v.string(),
    balance: v.number(),
    icon: v.string(),
  },
  handler: async (ctx, { userId, name, type, balance, icon }) => {
    return await ctx.db.insert('accounts', { userId, name, type, balance, icon });
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
    const accounts = await ctx.db
      .query('accounts')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .filter((q) => q.neq(q.field('deleted'), true))
      .collect();

    const initialBalance = accounts.reduce((sum, a) => sum + a.balance, 0);

    // Sum all non-deleted transactions for this user
    const transactions = await ctx.db
      .query('transactions')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();

    const txSum = transactions.reduce((sum, t) => sum + t.amount, 0);

    return initialBalance + txSum;
  },
});
