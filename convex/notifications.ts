import { v } from 'convex/values';
import { query } from './_generated/server';

function nextMonthStart(month: string): string {
  const [y, m] = month.split('-').map(Number);
  if (m === 12) return `${y + 1}-01-01`;
  return `${y}-${String(m + 1).padStart(2, '0')}-01`;
}

function addDays(dateStr: string, days: number): string {
  const d = new Date(dateStr + 'T00:00:00');
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export type NotificationItem =
  | { type: 'recurring_due'; id: string; name: string; amount: number; nextDue: string; daysUntil: number }
  | { type: 'budget_80'; spent: number; budget: number; percent: number }
  | { type: 'budget_100'; spent: number; budget: number; percent: number };

export const getNotifications = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }): Promise<NotificationItem[]> => {
    const today = new Date().toISOString().slice(0, 10);
    const in7Days = addDays(today, 7);
    const notifications: NotificationItem[] = [];

    // ── Recurring payments due within 7 days ──────────────────────────────
    const recurring = await ctx.db
      .query('recurring_payments')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();

    for (const r of recurring) {
      if (r.isPaused) continue;
      if (r.nextDue >= today && r.nextDue <= in7Days) {
        const diff = Math.ceil(
          (new Date(r.nextDue + 'T00:00:00').getTime() - new Date(today + 'T00:00:00').getTime()) /
            (1000 * 60 * 60 * 24)
        );
        notifications.push({
          type: 'recurring_due',
          id: r._id,
          name: r.name,
          amount: r.amount,
          nextDue: r.nextDue,
          daysUntil: diff,
        });
      }
    }

    // Sort by due date ascending
    notifications.sort((a, b) => {
      if (a.type === 'recurring_due' && b.type === 'recurring_due') {
        return a.nextDue.localeCompare(b.nextDue);
      }
      return 0;
    });

    // ── Budget alerts ─────────────────────────────────────────────────────
    const month = today.slice(0, 7); // YYYY-MM
    const budgetRow = await ctx.db
      .query('monthly_budgets')
      .withIndex('by_user_month', (q) => q.eq('userId', userId).eq('month', month))
      .first();

    if (budgetRow && budgetRow.budget > 0) {
      const start = month + '-01';
      const end = nextMonthStart(month);
      const txs = await ctx.db
        .query('transactions')
        .withIndex('by_user_date', (q) =>
          q.eq('userId', userId).gte('date', start).lt('date', end)
        )
        .collect();

      let spent = 0;
      for (const tx of txs) {
        if (tx.paidFromGoalId) continue;
        if (tx.amount < 0) spent += Math.abs(tx.amount);
      }

      const percent = Math.round((spent / budgetRow.budget) * 100);

      if (percent >= 100) {
        notifications.push({ type: 'budget_100', spent, budget: budgetRow.budget, percent });
      } else if (percent >= 80) {
        notifications.push({ type: 'budget_80', spent, budget: budgetRow.budget, percent });
      }
    }

    return notifications;
  },
});
