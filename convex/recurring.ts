import { v } from 'convex/values';
import { internalMutation, mutation, query } from './_generated/server';
import type { Id } from './_generated/dataModel';

// ── Date helpers ────────────────────────────────────────────────

function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

/** Next due date for a monthly payment with a specific billing day. */
function nextDueForBillingDay(billingDay: number, fromDate: string): string {
  const [y, m] = fromDate.split('-').map(Number);
  const nextMonth = m === 12 ? 1 : m + 1;
  const nextYear = m === 12 ? y + 1 : y;
  const effectiveDay = Math.min(billingDay, daysInMonth(nextYear, nextMonth));
  return `${nextYear}-${String(nextMonth).padStart(2, '0')}-${String(effectiveDay).padStart(2, '0')}`;
}

/** Initial nextDue when creating a payment: next future occurrence of billingDay. */
function initialNextDue(billingDay: number, today: string): string {
  const [y, m, d] = today.split('-').map(Number);
  const effectiveDayThisMonth = Math.min(billingDay, daysInMonth(y, m));
  if (effectiveDayThisMonth > d) {
    // billing day is still coming this month
    return `${y}-${String(m).padStart(2, '0')}-${String(effectiveDayThisMonth).padStart(2, '0')}`;
  }
  // already passed — use next month
  const nextMonth = m === 12 ? 1 : m + 1;
  const nextYear = m === 12 ? y + 1 : y;
  const effectiveDayNextMonth = Math.min(billingDay, daysInMonth(nextYear, nextMonth));
  return `${nextYear}-${String(nextMonth).padStart(2, '0')}-${String(effectiveDayNextMonth).padStart(2, '0')}`;
}

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

function prevMonthString(yyyymm: string): string {
  const [y, m] = yyyymm.split('-').map(Number);
  if (m === 1) return `${y - 1}-12`;
  return `${y}-${String(m - 1).padStart(2, '0')}`;
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
    billingDay: v.optional(v.number()),
    purchasedAt: v.optional(v.string()),
  },
  handler: async (ctx, { userId, name, amount, frequency, categoryId, billingDay, purchasedAt }) => {
    const today = todayString();
    const nextDue =
      frequency === 'monthly'
        ? billingDay ? initialNextDue(billingDay, today) : firstOfNextMonth(today)
        : samedayNextYear(today);
    const id = await ctx.db.insert('recurring_payments', {
      userId,
      name,
      amount,
      frequency,
      categoryId,
      billingDay,
      purchasedAt,
      isPaused: false,
      nextDue,
    });
    // Only create a transaction now if the billing day has already passed
    // (or is today), or no billing day was set. If it's still coming this
    // month, nextDue is already set correctly and the daily cron handles it.
    const todayDay = Number(today.slice(8, 10));
    const shouldCreateNow = !billingDay || billingDay <= todayDay;
    if (shouldCreateNow) {
      await ctx.db.insert('transactions', {
        userId,
        title: name,
        amount: -amount,
        note: 'Recurring payment',
        date: today,
        ...(categoryId ? { categoryId } : {}),
      });
    }
    return id;
  },
});

// Creates a yearly recurring payment AND a linked sinking fund goal atomically.
// No immediate transaction — the goal handles payment when funded.
export const createLinkedSinkingFund = mutation({
  args: {
    userId: v.string(),
    name: v.string(),
    amount: v.number(),
    categoryId: v.optional(v.id('categories')),
    goalIcon: v.string(),
    goalColor: v.string(),
  },
  handler: async (ctx, { userId, name, amount, categoryId, goalIcon, goalColor }) => {
    const today = todayString();
    const nextDue = samedayNextYear(today);

    // Insert recurring first (no linkedGoalId yet)
    const recurringId = await ctx.db.insert('recurring_payments', {
      userId,
      name,
      amount,
      frequency: 'yearly',
      isPaused: false,
      nextDue,
      ...(categoryId ? { categoryId } : {}),
    });

    // Insert goal linked to the recurring
    const goalId = await ctx.db.insert('goals', {
      userId,
      name,
      icon: goalIcon,
      target: amount,
      saved: 0,
      color: goalColor,
      status: 'active',
      isRecurring: true,
      linkedRecurringId: recurringId,
    });

    // Link recurring back to goal
    await ctx.db.patch(recurringId, { linkedGoalId: goalId });

    return { recurringId, goalId };
  },
});

export const updateCategory = mutation({
  args: { id: v.id('recurring_payments'), categoryId: v.optional(v.id('categories')) },
  handler: async (ctx, { id, categoryId }) => {
    await ctx.db.patch(id, { categoryId });
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
    const payment = await ctx.db.get(id);
    if (!payment) return;

    // Clear linkedRecurringId on the linked goal so it becomes a standalone goal
    if (payment.linkedGoalId) {
      await ctx.db.patch(payment.linkedGoalId, {
        linkedRecurringId: undefined,
        paymentDue: false,
      });
    }

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

      // ── Yearly sinking fund payments ──────────────────────────
      if (payment.frequency === 'yearly' && payment.linkedGoalId) {
        const goal = await ctx.db.get(payment.linkedGoalId);

        if (goal && goal.saved >= payment.amount) {
          // Fully funded — auto-pay
          await ctx.db.insert('transactions', {
            userId: payment.userId,
            title: payment.name,
            amount: -payment.amount,
            note: 'Paid from savings goal',
            date: today,
            paidFromGoalId: payment.linkedGoalId,
            ...(payment.categoryId ? { categoryId: payment.categoryId } : {}),
          });
          // Reset goal for next year
          await ctx.db.patch(payment.linkedGoalId, { saved: 0, paymentDue: false });
        } else if (goal) {
          // Underfunded — flag the goal, do not create transaction
          await ctx.db.patch(payment.linkedGoalId, { paymentDue: true });
        }

        // Advance nextDue regardless (user handles manually if underfunded)
        const nextDue = samedayNextYear(payment.nextDue);
        await ctx.db.patch(payment._id, { nextDue, lastProcessed: today });
        continue;
      }

      // ── Regular monthly/yearly payments ──────────────────────
      await ctx.db.insert('transactions', {
        userId: payment.userId,
        title: payment.name,
        amount: -payment.amount,
        note: 'Recurring payment',
        date: today,
        ...(payment.categoryId ? { categoryId: payment.categoryId } : {}),
      });

      const nextDue =
        payment.frequency === 'monthly'
          ? payment.billingDay
            ? nextDueForBillingDay(payment.billingDay, payment.nextDue)
            : firstOfNextMonth(payment.nextDue)
          : samedayNextYear(payment.nextDue);

      await ctx.db.patch(payment._id, { nextDue, lastProcessed: today });
    }

    // ── Carry forward monthly budgets ──────────────────────────
    const currentMonth = today.slice(0, 7); // 'YYYY-MM'
    const previousMonth = prevMonthString(currentMonth);

    const prevBudgets = await ctx.db
      .query('monthly_budgets')
      .filter((q) => q.eq(q.field('month'), previousMonth))
      .collect();

    for (const pb of prevBudgets) {
      const existing = await ctx.db
        .query('monthly_budgets')
        .withIndex('by_user_month', (q) =>
          q.eq('userId', pb.userId).eq('month', currentMonth)
        )
        .first();
      if (!existing) {
        await ctx.db.insert('monthly_budgets', {
          userId: pb.userId,
          month: currentMonth,
          budget: pb.budget,
        });
      }
    }
  },
});

export const setRecurringCategoryId = internalMutation({
  args: { id: v.id('recurring_payments'), categoryId: v.id('categories') },
  handler: async (ctx, { id, categoryId }) => {
    await ctx.db.patch(id, { categoryId });
  },
});
