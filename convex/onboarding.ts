import { v } from 'convex/values';
import { mutation } from './_generated/server';

const CATEGORY_ICONS: Record<string, string> = {
  'Food & Dining': 'shopping-bag',
  'Transport': 'navigation',
  'Entertainment': 'play-circle',
  'Shopping': 'shopping-cart',
  'Bills & Utilities': 'zap',
  'Health': 'heart',
  'Education': 'book',
  'Subscriptions': 'refresh-cw',
  'Groceries': 'package',
  'Rent': 'home',
  'Insurance': 'shield',
  'Personal Care': 'smile',
  'Gifts': 'gift',
  'Travel': 'map',
};

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
    selectedCategories: v.array(v.string()),
    customCategories: v.array(v.string()),
    goals: v.array(
      v.object({
        name: v.string(),
        icon: v.string(),
        target: v.number(),
        color: v.string(),
      })
    ),
    monthlyBudget: v.optional(
      v.object({
        month: v.string(),
        budget: v.number(),
      })
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

    // 3. Create categories (selected + custom + built-in income)
    const allCategoryNames = [...args.selectedCategories, ...args.customCategories];
    for (const name of allCategoryNames) {
      const icon = CATEGORY_ICONS[name] ?? 'tag';
      await ctx.db.insert('categories', {
        userId,
        name,
        icon,
        type: 'expense',
        color: '#525252',
      });
    }

    // Always add income categories
    await ctx.db.insert('categories', { userId, name: 'Salary', icon: 'briefcase', type: 'income', color: '#059669' });
    await ctx.db.insert('categories', { userId, name: 'Freelance', icon: 'code', type: 'income', color: '#2563EB' });
    await ctx.db.insert('categories', { userId, name: 'Other Income', icon: 'plus-circle', type: 'income', color: '#7C3AED' });

    // 4. Create goals
    for (const goal of args.goals) {
      await ctx.db.insert('goals', { userId, ...goal, saved: 0 });
    }

    // 5. Create monthly budget
    if (args.monthlyBudget && args.monthlyBudget.budget > 0) {
      await ctx.db.insert('monthly_budgets', {
        userId,
        month: args.monthlyBudget.month,
        budget: args.monthlyBudget.budget,
      });
    }
  },
});
