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
    const start = month + '-01';
    const end = nextMonthStart(month);

    const txs = await ctx.db
      .query('transactions')
      .withIndex('by_user_date', (q) =>
        q.eq('userId', userId).gte('date', start).lt('date', end)
      )
      .filter((q) => q.neq(q.field('deleted'), true))
      .collect();

    // Fetch category for each transaction (new-style transactions only)
    return await Promise.all(
      txs.map(async (tx) => {
        let categoryName = 'Unknown';
        let categoryIcon = 'tag';
        if (tx.categoryId) {
          const cat = await ctx.db.get(tx.categoryId as Id<'categories'>);
          if (cat) {
            categoryName = cat.name;
            categoryIcon = cat.icon;
          }
        }
        return { ...tx, categoryName, categoryIcon };
      })
    );
  },
});

export const getMonthlyStats = query({
  args: { userId: v.string(), month: v.string() },
  handler: async (ctx, { userId, month }) => {
    const start = month + '-01';
    const end = nextMonthStart(month);

    const txs = await ctx.db
      .query('transactions')
      .withIndex('by_user_date', (q) =>
        q.eq('userId', userId).gte('date', start).lt('date', end)
      )
      .filter((q) => q.neq(q.field('deleted'), true))
      .collect();

    let income = 0;
    let expenses = 0;
    for (const tx of txs) {
      if (tx.amount > 0) income += tx.amount;
      else expenses += Math.abs(tx.amount);
    }
    return { income, expenses };
  },
});

export const getCategoryBreakdown = query({
  args: { userId: v.string(), month: v.string() },
  handler: async (ctx, { userId, month }) => {
    const start = month + '-01';
    const end = nextMonthStart(month);

    const txs = await ctx.db
      .query('transactions')
      .withIndex('by_user_date', (q) =>
        q.eq('userId', userId).gte('date', start).lt('date', end)
      )
      .filter((q) =>
        q.and(
          q.neq(q.field('deleted'), true),
          q.lt(q.field('amount'), 0) // expenses only
        )
      )
      .collect();

    const catMap = new Map<string, { name: string; icon: string; amount: number }>();

    for (const tx of txs) {
      if (!tx.categoryId) continue;
      const catId = tx.categoryId.toString();
      if (!catMap.has(catId)) {
        const cat = await ctx.db.get(tx.categoryId as Id<'categories'>);
        if (!cat) continue;
        catMap.set(catId, { name: cat.name, icon: cat.icon, amount: 0 });
      }
      catMap.get(catId)!.amount += Math.abs(tx.amount);
    }

    const total = [...catMap.values()].reduce((s, c) => s + c.amount, 0);
    return [...catMap.values()]
      .sort((a, b) => b.amount - a.amount)
      .map((c) => ({ ...c, percent: total > 0 ? Math.round((c.amount / total) * 100) : 0 }));
  },
});

export const getDailySpending = query({
  args: { userId: v.string(), month: v.string() },
  handler: async (ctx, { userId, month }) => {
    const start = month + '-01';
    const end = nextMonthStart(month);

    const txs = await ctx.db
      .query('transactions')
      .withIndex('by_user_date', (q) =>
        q.eq('userId', userId).gte('date', start).lt('date', end)
      )
      .filter((q) =>
        q.and(
          q.neq(q.field('deleted'), true),
          q.lt(q.field('amount'), 0)
        )
      )
      .collect();

    const dayMap = new Map<string, number>();
    for (const tx of txs) {
      dayMap.set(tx.date, (dayMap.get(tx.date) ?? 0) + Math.abs(tx.amount));
    }

    return [...dayMap.entries()]
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([day, amount]) => ({ day, amount }));
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    title: v.string(),
    amount: v.number(),
    note: v.string(),
    date: v.string(),
    categoryId: v.id('categories'),
    accountId: v.id('accounts'),
  },
  handler: async (ctx, { userId, title, amount, note, date, categoryId, accountId }) => {
    return await ctx.db.insert('transactions', {
      userId,
      title,
      amount,
      note,
      date,
      categoryId,
      accountId,
    });
  },
});

export const remove = mutation({
  args: { id: v.id('transactions') },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});
