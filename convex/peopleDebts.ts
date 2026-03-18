import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
import { requireAuth } from './lib/auth';

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    await requireAuth(ctx, userId);
    const debts = await ctx.db
      .query('people_debts')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();
    return await Promise.all(
      debts.map(async (debt) => {
        const payments = await ctx.db
          .query('debt_payments')
          .withIndex('by_debt', (q) => q.eq('debtId', debt._id))
          .collect();
        const paid = payments.reduce((sum, p) => sum + p.amount, 0);
        return { ...debt, paid, remaining: debt.totalAmount - paid };
      })
    );
  },
});

export const getById = query({
  args: { id: v.id('people_debts'), userId: v.string() },
  handler: async (ctx, { id, userId }) => {
    await requireAuth(ctx, userId);
    const debt = await ctx.db.get(id);
    if (!debt) return null;
    const payments = await ctx.db
      .query('debt_payments')
      .withIndex('by_debt', (q) => q.eq('debtId', id))
      .collect();
    const paid = payments.reduce((sum, p) => sum + p.amount, 0);
    return {
      ...debt,
      paid,
      remaining: debt.totalAmount - paid,
      payments: payments.sort((a, b) => b.date.localeCompare(a.date)),
    };
  },
});

export const create = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    type: v.union(v.literal('lent'), v.literal('borrowed')),
    totalAmount: v.number(),
    date: v.string(),
    note: v.optional(v.string()),
  },
  handler: async (ctx, { userId, name, type, totalAmount, date, note }) => {
    await requireAuth(ctx, userId);
    return await ctx.db.insert('people_debts', {
      userId,
      name,
      type,
      totalAmount,
      date,
      ...(note ? { note } : {}),
    });
  },
});

export const remove = mutation({
  args: { id: v.id('people_debts'), userId: v.string() },
  handler: async (ctx, { id, userId }) => {
    await requireAuth(ctx, userId);
    const payments = await ctx.db
      .query('debt_payments')
      .withIndex('by_debt', (q) => q.eq('debtId', id))
      .collect();
    await Promise.all(payments.map((p) => ctx.db.delete(p._id)));
    await ctx.db.delete(id);
  },
});

export const settle = mutation({
  args: { id: v.id('people_debts'), userId: v.string() },
  handler: async (ctx, { id, userId }) => {
    await requireAuth(ctx, userId);
    await ctx.db.patch(id, { isSettled: true });
  },
});

export const unsettle = mutation({
  args: { id: v.id('people_debts'), userId: v.string() },
  handler: async (ctx, { id, userId }) => {
    await requireAuth(ctx, userId);
    await ctx.db.patch(id, { isSettled: false });
  },
});

export const addPayment = mutation({
  args: {
    userId: v.string(),
    debtId: v.id('people_debts'),
    amount: v.number(),
    date: v.string(),
    note: v.optional(v.string()),
  },
  handler: async (ctx, { userId, debtId, amount, date, note }) => {
    await requireAuth(ctx, userId);
    return await ctx.db.insert('debt_payments', {
      userId,
      debtId,
      amount,
      date,
      ...(note ? { note } : {}),
    });
  },
});

export const removePayment = mutation({
  args: { id: v.id('debt_payments'), userId: v.string() },
  handler: async (ctx, { id, userId }) => {
    await requireAuth(ctx, userId);
    await ctx.db.delete(id);
  },
});
