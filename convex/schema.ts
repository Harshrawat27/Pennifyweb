import { defineSchema, defineTable } from 'convex/server';
import { v } from 'convex/values';

export default defineSchema({
  accounts: defineTable({
    userId: v.string(),
    name: v.string(),
    type: v.string(),
    icon: v.string(),
    isActive: v.optional(v.boolean()), // undefined or true = active, false = inactive
  }).index('by_user', ['userId']),

  categories: defineTable({
    userId: v.string(),
    name: v.string(),
    icon: v.string(),
    type: v.string(), // 'expense' | 'income'
    color: v.string(),
    // Legacy
    // localId: v.optional(v.string()),
    // updatedAt: v.optional(v.string()),
    // deleted: v.optional(v.boolean()),
  }).index('by_user', ['userId']),

  transactions: defineTable({
    userId: v.string(),
    title: v.string(),
    amount: v.number(),
    note: v.string(),
    date: v.string(), // YYYY-MM-DD
    // Convex-native refs (new architecture)
    categoryId: v.optional(v.id('categories')),
    accountId: v.optional(v.id('accounts')),
    paidFromGoalId: v.optional(v.id('goals')), // set when paid via sinking fund goal
    // Legacy refs (old SQLite sync)
    // categoryLocalId: v.optional(v.string()),
    // accountLocalId: v.optional(v.string()),
    // localId: v.optional(v.string()),
    // updatedAt: v.optional(v.string()),
    // deleted: v.optional(v.boolean()),
  })
    .index('by_user', ['userId'])
    .index('by_user_date', ['userId', 'date']),

  budgets: defineTable({
    userId: v.string(),
    categoryId: v.optional(v.id('categories')), // Convex-native ref
    limitAmount: v.number(),
    month: v.string(), // YYYY-MM
    // Legacy
    // categoryLocalId: v.optional(v.string()),
    // localId: v.optional(v.string()),
    // updatedAt: v.optional(v.string()),
    // deleted: v.optional(v.boolean()),
  })
    .index('by_user', ['userId'])
    .index('by_user_month', ['userId', 'month']),

  goals: defineTable({
    userId: v.string(),
    name: v.string(),
    icon: v.string(),
    target: v.number(),
    saved: v.number(),
    color: v.string(),
    status: v.optional(v.union(v.literal('active'), v.literal('completed'))),
    completedAt: v.optional(v.string()), // YYYY-MM-DD
    // Sinking fund fields
    isRecurring: v.optional(v.boolean()),                        // true = auto-resets after payment
    linkedRecurringId: v.optional(v.id('recurring_payments')),  // linked yearly recurring
    paymentDue: v.optional(v.boolean()),                        // true = cron flagged as underfunded
  }).index('by_user', ['userId']),

  settings: defineTable({
    userId: v.string(),
    key: v.string(),
    value: v.string(),
    updatedAt: v.string(),
  })
    .index('by_user', ['userId'])
    .index('by_user_key', ['userId', 'key']),

  user_preferences: defineTable({
    userId: v.string(),
    currency: v.string(),
    overallBalance: v.optional(v.number()),
    subscriptionStatus: v.optional(v.union(
      v.literal('none'),
      v.literal('monthly'),
      v.literal('yearly'),
      v.literal('expired')
    )),
    subscriptionExpiresAt: v.optional(v.string()), // ISO date string
    trackIncome: v.optional(v.boolean()),
    notificationsEnabled: v.optional(v.boolean()),
    dailyReminder: v.optional(v.boolean()),
    weeklyReport: v.optional(v.boolean()),
    // Legacy fields (backward compat)
    // localId: v.optional(v.string()),
    email: v.optional(v.string()),
    // overall_balance: v.optional(v.number()),
    // track_income: v.optional(v.boolean()),
    // notifications_enabled: v.optional(v.boolean()),
    // daily_reminder: v.optional(v.boolean()),
    // weekly_report: v.optional(v.boolean()),
    // sync_enabled: v.optional(v.boolean()),
    // has_onboarded: v.optional(v.string()),
    // updatedAt: v.optional(v.string()),
  }).index('by_user', ['userId']),

  recurring_payments: defineTable({
    userId: v.string(),
    name: v.string(),
    amount: v.number(),
    frequency: v.union(v.literal('monthly'), v.literal('yearly')),
    categoryId: v.optional(v.id('categories')),
    isPaused: v.optional(v.boolean()),
    nextDue: v.string(),         // YYYY-MM-DD — next date to create a transaction
    lastProcessed: v.optional(v.string()), // YYYY-MM-DD — last time transaction was created
    linkedGoalId: v.optional(v.id('goals')), // linked sinking fund goal
  }).index('by_user', ['userId']),

  goal_contributions: defineTable({
    goalId: v.id('goals'),
    userId: v.string(),
    amount: v.number(),
    date: v.string(), // YYYY-MM-DD
    note: v.optional(v.string()),
  }).index('by_goal', ['goalId']),

  monthly_budgets: defineTable({
    userId: v.string(),
    month: v.string(), // YYYY-MM
    budget: v.number(),
    // Legacy
    // localId: v.optional(v.string()),
    // updatedAt: v.optional(v.string()),
    // deleted: v.optional(v.boolean()),
  })
    .index('by_user', ['userId'])
    .index('by_user_month', ['userId', 'month']),
});
