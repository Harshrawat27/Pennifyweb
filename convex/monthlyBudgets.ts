import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const getByMonth = query({
  args: { userId: v.string(), month: v.string() },
  handler: async (ctx, { userId, month }) => {
    return await ctx.db
      .query('monthly_budgets')
      .withIndex('by_user_month', (q) => q.eq('userId', userId).eq('month', month))
      .first();
  },
});

export const upsert = mutation({
  args: { userId: v.string(), month: v.string(), budget: v.number() },
  handler: async (ctx, { userId, month, budget }) => {
    const existing = await ctx.db
      .query('monthly_budgets')
      .withIndex('by_user_month', (q) => q.eq('userId', userId).eq('month', month))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, { budget });
    } else {
      await ctx.db.insert('monthly_budgets', { userId, month, budget });
    }
  },
});
