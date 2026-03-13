import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
import type { Id } from './_generated/dataModel';
import { requireAuth } from './lib/auth';

async function enrichCategory(ctx: any, cat: any) {
  let parentCategoryName: string | undefined;
  let parentCategoryColor: string | undefined;
  if (cat.parentCategoryId) {
    const parent = await ctx.db.get(cat.parentCategoryId as Id<'parent_categories'>);
    if (parent) {
      parentCategoryName = parent.name;
      parentCategoryColor = parent.color;
    }
  }
  return { ...cat, parentCategoryName, parentCategoryColor };
}

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    await requireAuth(ctx, userId);
    const cats = await ctx.db
      .query('categories')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();
    return await Promise.all(cats.map((cat) => enrichCategory(ctx, cat)));
  },
});

export const listByType = query({
  args: { userId: v.string(), type: v.string() },
  handler: async (ctx, { userId, type }) => {
    await requireAuth(ctx, userId);
    const cats = await ctx.db
      .query('categories')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .filter((q) => q.eq(q.field('type'), type))
      .collect();
    return await Promise.all(cats.map((cat) => enrichCategory(ctx, cat)));
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    icon: v.string(),
    type: v.string(),
    color: v.string(),
    parentCategoryId: v.optional(v.id('parent_categories')),
  },
  handler: async (ctx, { userId, name, icon, type, color, parentCategoryId }) => {
    await requireAuth(ctx, userId);
    return await ctx.db.insert('categories', { userId, name, icon, type, color, parentCategoryId, isDefault: false });
  },
});

export const remove = mutation({
  args: { id: v.id('categories') },
  handler: async (ctx, { id }) => {
    const cat = await ctx.db.get(id);
    if (!cat) return;
    await requireAuth(ctx, cat.userId);
    if (cat.isDefault) throw new Error('Cannot delete a default category');
    await ctx.db.delete(id);
  },
});
