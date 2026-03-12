import { v } from 'convex/values';
import { mutation } from './_generated/server';
import { DEFAULT_EXPENSE_CATEGORIES, DEFAULT_INCOME_CATEGORIES, PARENT_CATEGORY_COLORS } from './defaultCategories';

/**
 * Batch commit all onboarding data to Convex in one mutation.
 * Called once after the user completes the onboarding wizard.
 */
export const commitAll = mutation({
  args: {
    userId: v.string(),
    preferences: v.object({
      currency: v.string(),
      overallBalance: v.number(),
      trackIncome: v.boolean(),
      notificationsEnabled: v.boolean(),
      dailyReminder: v.boolean(),
      weeklyReport: v.boolean(),
    }),
    accounts: v.array(
      v.object({
        name: v.string(),
        type: v.string(),
        icon: v.string(),
      })
    ),
    customCategories: v.optional(
      v.array(
        v.object({
          name: v.string(),
          parentCategory: v.optional(v.string()),
        })
      )
    ), // user-added categories beyond defaults
    goals: v.array(
      v.object({
        name: v.string(),
        icon: v.string(),
        target: v.number(),
        color: v.string(),
      })
    ),
    recurringPayments: v.optional(
      v.array(
        v.object({
          name: v.string(),
          amount: v.number(),
          frequency: v.union(v.literal('monthly'), v.literal('yearly')),
          billingDay: v.optional(v.number()),
          purchasedAt: v.optional(v.string()),
        })
      )
    ),
    monthlyBudget: v.optional(
      v.object({
        month: v.string(),
        budget: v.number(),
      })
    ),
    smartRules: v.optional(
      v.array(
        v.object({
          keyword: v.string(),
          categoryName: v.string(),
          categoryIcon: v.string(),
          categoryColor: v.string(),
        })
      )
    ),
    categoryBudgets: v.optional(
      v.array(
        v.object({
          categoryName: v.string(),
          limitAmount: v.number(),
        })
      )
    ),
  },
  handler: async (ctx, args) => {
    const { userId } = args;

    // 1. Create user preferences
    await ctx.db.insert('user_preferences', { userId, ...args.preferences });

    // 2. Create accounts
    for (const acc of args.accounts) {
      await ctx.db.insert('accounts', { userId, name: acc.name, type: acc.type, icon: acc.icon });
    }

    // 3. Create all 40 default expense categories
    for (const cat of DEFAULT_EXPENSE_CATEGORIES) {
      await ctx.db.insert('categories', {
        userId,
        name: cat.name,
        icon: cat.icon,
        type: 'expense',
        color: cat.color,
        parentCategory: cat.parentCategory,
        isDefault: true,
      });
    }

    // Default income categories
    for (const cat of DEFAULT_INCOME_CATEGORIES) {
      await ctx.db.insert('categories', {
        userId,
        name: cat.name,
        icon: cat.icon,
        type: 'income',
        color: cat.color,
        isDefault: true,
      });
    }

    // User's custom categories (added during onboarding)
    for (const cat of (args.customCategories ?? [])) {
      const color = cat.parentCategory
        ? (PARENT_CATEGORY_COLORS[cat.parentCategory] ?? '#6B7280')
        : '#6B7280';
      await ctx.db.insert('categories', {
        userId,
        name: cat.name,
        icon: 'tag',
        type: 'expense',
        color,
        parentCategory: cat.parentCategory,
        isDefault: false,
      });
    }

    // 4. Create goals
    for (const goal of args.goals) {
      await ctx.db.insert('goals', { userId, ...goal, saved: 0 });
    }

    // 5. Create recurring payments
    const createdRecurring: Array<{ id: string; name: string }> = [];
    if (args.recurringPayments && args.recurringPayments.length > 0) {
      const today = new Date().toISOString().slice(0, 10);
      const [y, m, d] = today.split('-').map(Number);
      const nextYearToday = `${y + 1}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

      function daysInMonth(year: number, month: number) { return new Date(year, month, 0).getDate(); }
      function nextDueMonthly(billingDay: number | undefined): string {
        if (!billingDay) {
          return m === 12 ? `${y + 1}-01-01` : `${y}-${String(m + 1).padStart(2, '0')}-01`;
        }
        const effDay = Math.min(billingDay, daysInMonth(y, m));
        if (effDay > d) return `${y}-${String(m).padStart(2, '0')}-${String(effDay).padStart(2, '0')}`;
        const nm = m === 12 ? 1 : m + 1;
        const ny = m === 12 ? y + 1 : y;
        return `${ny}-${String(nm).padStart(2, '0')}-${String(Math.min(billingDay, daysInMonth(ny, nm))).padStart(2, '0')}`;
      }

      for (const p of args.recurringPayments) {
        const id = await ctx.db.insert('recurring_payments', {
          userId,
          name: p.name,
          amount: p.amount,
          frequency: p.frequency,
          billingDay: p.billingDay,
          purchasedAt: p.purchasedAt,
          isPaused: false,
          nextDue: p.frequency === 'monthly' ? nextDueMonthly(p.billingDay) : nextYearToday,
        });
        createdRecurring.push({ id, name: p.name });
        // Only create a transaction now if the billing day has already passed
        // (or is today), or no billing day was set. If the billing day is still
        // coming this month, the daily cron will handle it on the correct date.
        const shouldCreateNow = !p.billingDay || p.billingDay <= d;
        if (shouldCreateNow) {
          await ctx.db.insert('transactions', {
            userId,
            title: p.name,
            amount: -p.amount,
            note: 'Recurring payment',
            date: today,
          });
        }
      }
    }

    // 6. Create monthly budget
    if (args.monthlyBudget && args.monthlyBudget.budget > 0) {
      await ctx.db.insert('monthly_budgets', {
        userId,
        month: args.monthlyBudget.month,
        budget: args.monthlyBudget.budget,
      });
    }

    // 7. Create smart rules — resolve categoryId by name from the just-inserted categories
    if (args.smartRules && args.smartRules.length > 0) {
      const allCategories = await ctx.db
        .query('categories')
        .filter((q) => q.eq(q.field('userId'), userId))
        .collect();
      const now = new Date().toISOString();
      for (let i = 0; i < args.smartRules.length; i++) {
        const rule = args.smartRules[i];
        const cat = allCategories.find((c) => c.name === rule.categoryName);
        if (!cat) continue;
        // Offset createdAt by index to preserve ordering
        const createdAt = new Date(Date.now() + i).toISOString();
        await ctx.db.insert('category_rules', {
          userId,
          keyword: rule.keyword.trim(),
          categoryId: cat._id,
          categoryName: rule.categoryName,
          categoryIcon: rule.categoryIcon,
          categoryColor: rule.categoryColor,
          createdAt,
        });
      }
    }

    // 8. Create category budgets — resolve categoryId by name, same as smart rules
    if (args.categoryBudgets && args.categoryBudgets.length > 0) {
      const allCategories = await ctx.db
        .query('categories')
        .filter((q) => q.eq(q.field('userId'), userId))
        .collect();
      const today = new Date();
      const currentMonth = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}`;
      for (const budget of args.categoryBudgets) {
        const cat = allCategories.find((c) => c.name === budget.categoryName);
        if (!cat) continue;
        await ctx.db.insert('budgets', {
          userId,
          categoryId: cat._id,
          limitAmount: budget.limitAmount,
          month: currentMonth,
        });
      }
    }

    return { recurringPayments: createdRecurring };
  },
});
