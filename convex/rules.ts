import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query('category_rules')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    keyword: v.string(),
    categoryId: v.id('categories'),
    categoryName: v.string(),
    categoryIcon: v.string(),
    categoryColor: v.string(),
  },
  handler: async (ctx, { userId, keyword, categoryId, categoryName, categoryIcon, categoryColor }) => {
    return await ctx.db.insert('category_rules', {
      userId,
      keyword: keyword.trim(),
      categoryId,
      categoryName,
      categoryIcon,
      categoryColor,
      createdAt: new Date().toISOString(),
    });
  },
});

export const remove = mutation({
  args: { id: v.id('category_rules') },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});
