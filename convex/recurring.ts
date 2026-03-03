import { v } from 'convex/values';
import { internalMutation, mutation, query } from './_generated/server';

// ── Date helpers ────────────────────────────────────────────────

function firstOfNextMonth(from: string): string {
  const [y, m] = from.split('-').map(Number);
  if (m === 12) return `${y + 1}-01-01`;
  return `${y}-${String(m + 1).padStart(2, '0')}-01`;
}

function samedayNextYear(from: string): string {
  const [y, m, d] = from.split('-');
  return `${Number(y) + 1}-${m}-${d}`;
}

function todayString(): string {
  return new Date().toISOString().slice(0, 10);
}

// ── Queries ─────────────────────────────────────────────────────

export const list = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    return await ctx.db
      .query('recurring_payments')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();
  },
});

// ── Mutations ────────────────────────────────────────────────────

export const create = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    amount: v.number(),
    frequency: v.union(v.literal('monthly'), v.literal('yearly')),
    categoryId: v.optional(v.id('categories')),
  },
  handler: async (ctx, { userId, name, amount, frequency, categoryId }) => {
    const today = todayString();
    const nextDue =
      frequency === 'monthly' ? firstOfNextMonth(today) : samedayNextYear(today);
    await ctx.db.insert('recurring_payments', {
      userId,
      name,
      amount,
      frequency,
      categoryId,
      isPaused: false,
      nextDue,
    });
    // Create transaction for current month on the day it's added
    await ctx.db.insert('transactions', {
      userId,
      title: name,
      amount: -amount,
      note: 'Recurring payment',
      date: today,
      ...(categoryId ? { categoryId } : {}),
    });
  },
});

export const togglePause = mutation({
  args: { id: v.id('recurring_payments') },
  handler: async (ctx, { id }) => {
    const payment = await ctx.db.get(id);
    if (!payment) return;
    await ctx.db.patch(id, { isPaused: !payment.isPaused });
  },
});

export const remove = mutation({
  args: { id: v.id('recurring_payments') },
  handler: async (ctx, { id }) => {
    await ctx.db.delete(id);
  },
});

// ── Internal: called by cron on 1st of every month ──────────────

export const processMonthly = internalMutation({
  args: {},
  handler: async (ctx) => {
    const today = todayString();

    const all = await ctx.db.query('recurring_payments').collect();

    for (const payment of all) {
      // Skip paused or not yet due
      if (payment.isPaused === true) continue;
      if (payment.nextDue > today) continue;

      // Create the expense transaction
      await ctx.db.insert('transactions', {
        userId: payment.userId,
        title: payment.name,
        amount: -payment.amount,
        note: 'Recurring payment',
        date: today,
        ...(payment.categoryId ? { categoryId: payment.categoryId } : {}),
      });

      // Advance nextDue
      const nextDue =
        payment.frequency === 'monthly'
          ? firstOfNextMonth(payment.nextDue)
          : samedayNextYear(payment.nextDue);

      await ctx.db.patch(payment._id, { nextDue, lastProcessed: today });
    }
  },
});
