import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
import type { Id } from './_generated/dataModel';

function nextMonthStart(month: string): string {
  const [y, m] = month.split('-').map(Number);
  if (m === 12) return `${y + 1}-01-01`;
  return `${y}-${String(m + 1).padStart(2, '0')}-01`;
}

export const listByMonth = query({
  args: { userId: v.string(), month: v.string() },
  handler: async (ctx, { userId, month }) => {
    const budgets = await ctx.db
      .query('budgets')
      .withIndex('by_user_month', (q) => q.eq('userId', userId).eq('month', month))
      .filter((q) => q.neq(q.field('deleted'), true))
      .collect();

    const start = month + '-01';
    const end = nextMonthStart(month);

    // Enrich with category data and calculate spent
    return await Promise.all(
      budgets.map(async (budget) => {
        let categoryName = 'Unknown';
        let categoryIcon = 'tag';
        let spent = 0;

        if (budget.categoryId) {
          const cat = await ctx.db.get(budget.categoryId as Id<'categories'>);
          if (cat) {
            categoryName = cat.name;
            categoryIcon = cat.icon;

            // Sum expenses for this category in this month
            const txs = await ctx.db
              .query('transactions')
              .withIndex('by_user_date', (q) =>
                q.eq('userId', userId).gte('date', start).lt('date', end)
              )
              .filter((q) =>
                q.and(
                  q.eq(q.field('categoryId'), budget.categoryId as Id<'categories'>),
                  q.lt(q.field('amount'), 0)
                )
              )
              .collect();

            spent = txs.reduce((sum, t) => sum + Math.abs(t.amount), 0);
          }
        }

        return { ...budget, categoryName, categoryIcon, spent };
      })
    );
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    categoryId: v.id('categories'),
    limitAmount: v.number(),
    month: v.string(),
  },
  handler: async (ctx, { userId, categoryId, limitAmount, month }) => {
    return await ctx.db.insert('budgets', { userId, categoryId, limitAmount, month });
  },
});

export const remove = mutation({
  args: { id: v.id('budgets') },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});
