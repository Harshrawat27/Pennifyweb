import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
import type { Id } from './_generated/dataModel';
import { requireAuth } from './lib/auth';

function nextMonthStart(month: string): string {
  const [y, m] = month.split('-').map(Number);
  if (m === 12) return `${y + 1}-01-01`;
  return `${y}-${String(m + 1).padStart(2, '0')}-01`;
}

function prevMonthRange(month: string): { start: string; end: string } {
  const [y, m] = month.split('-').map(Number);
  const pm = m === 1 ? 12 : m - 1;
  const py = m === 1 ? y - 1 : y;
  const prev = `${py}-${String(pm).padStart(2, '0')}`;
  return { start: prev + '-01', end: nextMonthStart(prev) };
}

async function getSubCategoryIds(ctx: any, userId: string, parentCategoryId: Id<'parent_categories'>): Promise<Set<string>> {
  const subCats = await ctx.db
    .query('categories')
    .withIndex('by_user', (q: any) => q.eq('userId', userId))
    .filter((q: any) => q.eq(q.field('parentCategoryId'), parentCategoryId))
    .collect();
  return new Set(subCats.map((c: any) => c._id as string));
}

async function sumExpensesForCategories(ctx: any, userId: string, catIds: Set<string>, start: string, end: string): Promise<number> {
  if (catIds.size === 0) return 0;
  const txs = await ctx.db
    .query('transactions')
    .withIndex('by_user_date', (q: any) => q.eq('userId', userId).gte('date', start).lt('date', end))
    .filter((q: any) => q.lt(q.field('amount'), 0))
    .collect();
  return txs
    .filter((tx: any) => tx.categoryId && catIds.has(tx.categoryId as string))
    .reduce((sum: number, tx: any) => sum + Math.abs(tx.amount), 0);
}

export const listByMonth = query({
  args: { userId: v.string(), month: v.string() },
  handler: async (ctx, { userId, month }) => {
    await requireAuth(ctx, userId);
    const budgets = await ctx.db
      .query('budgets')
      .withIndex('by_user_month', (q) => q.eq('userId', userId).eq('month', month))
      .collect();

    const start = month + '-01';
    const end = nextMonthStart(month);

    return await Promise.all(
      budgets.map(async (budget) => {
        const parent = await ctx.db.get(budget.parentCategoryId as Id<'parent_categories'>);
        const parentName = parent?.name ?? 'Unknown';
        const parentIcon = parent?.icon ?? 'tag';
        const parentColor = parent?.color ?? '#6B7280';

        const subCatIds = await getSubCategoryIds(ctx, userId, budget.parentCategoryId as Id<'parent_categories'>);
        const spent = await sumExpensesForCategories(ctx, userId, subCatIds, start, end);

        return { ...budget, parentName, parentIcon, parentColor, spent };
      })
    );
  },
});

export const listByMonthWithComparison = query({
  args: { userId: v.string(), month: v.string() },
  handler: async (ctx, { userId, month }) => {
    await requireAuth(ctx, userId);
    const budgets = await ctx.db
      .query('budgets')
      .withIndex('by_user_month', (q) => q.eq('userId', userId).eq('month', month))
      .collect();

    const start = month + '-01';
    const end = nextMonthStart(month);
    const { start: lastStart, end: lastEnd } = prevMonthRange(month);

    return await Promise.all(
      budgets.map(async (budget) => {
        const parent = await ctx.db.get(budget.parentCategoryId as Id<'parent_categories'>);
        const parentName = parent?.name ?? 'Unknown';
        const parentIcon = parent?.icon ?? 'tag';
        const parentColor = parent?.color ?? '#6B7280';

        const subCatIds = await getSubCategoryIds(ctx, userId, budget.parentCategoryId as Id<'parent_categories'>);
        const spent = await sumExpensesForCategories(ctx, userId, subCatIds, start, end);
        const lastMonthSpent = await sumExpensesForCategories(ctx, userId, subCatIds, lastStart, lastEnd);

        return { ...budget, parentName, parentIcon, parentColor, spent, lastMonthSpent };
      })
    );
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    parentCategoryId: v.id('parent_categories'),
    limitAmount: v.number(),
    month: v.string(),
  },
  handler: async (ctx, { userId, parentCategoryId, limitAmount, month }) => {
    await requireAuth(ctx, userId);
    return await ctx.db.insert('budgets', { userId, parentCategoryId, limitAmount, month });
  },
});

export const remove = mutation({
  args: { id: v.id('budgets') },
  handler: async (ctx, { id }) => {
    const budget = await ctx.db.get(id);
    if (!budget) return;
    await requireAuth(ctx, budget.userId);
    await ctx.db.delete(id);
  },
});
