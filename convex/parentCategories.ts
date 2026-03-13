import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
import { requireAuth } from './lib/auth';

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    await requireAuth(ctx, userId);
    return await ctx.db
      .query('parent_categories')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    icon: v.string(),
    color: v.string(),
  },
  handler: async (ctx, { userId, name, icon, color }) => {
    await requireAuth(ctx, userId);
    return await ctx.db.insert('parent_categories', { userId, name, icon, color, isDefault: false });
  },
});

export const remove = mutation({
  args: { id: v.id('parent_categories') },
  handler: async (ctx, { id }) => {
    const parent = await ctx.db.get(id);
    if (!parent) return;
    await requireAuth(ctx, parent.userId);
    if (parent.isDefault) throw new Error('Cannot delete a default category group');
    await ctx.db.delete(id);
  },
});
