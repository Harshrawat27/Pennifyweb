import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query('categories')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();
  },
});

export const listByType = query({
  args: { userId: v.string(), type: v.string() },
  handler: async (ctx, { userId, type }) => {
    return await ctx.db
      .query('categories')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .filter((q) => q.eq(q.field('type'), type))
      .collect();
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    icon: v.string(),
    type: v.string(),
    color: v.string(),
  },
  handler: async (ctx, { userId, name, icon, type, color }) => {
    return await ctx.db.insert('categories', { userId, name, icon, type, color });
  },
});

export const remove = mutation({
  args: { id: v.id('categories') },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});
