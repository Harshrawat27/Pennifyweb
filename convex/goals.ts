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
    return await ctx.db.insert('goals', { userId, name, icon, target, saved: 0, color });
  },
});

export const updateSaved = mutation({
  args: { id: v.id('goals'), saved: v.number() },
  handler: async (ctx, { id, saved }) => {
    await ctx.db.patch(id, { saved });
  },
});

export const remove = mutation({
  args: { id: v.id('goals') },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});
