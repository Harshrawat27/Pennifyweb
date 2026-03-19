import { v } from 'convex/values';
import { mutation, query } from './_generated/server';
import { requireAuth } from './lib/auth';

export const get = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
    await requireAuth(ctx, userId);
    return await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();
  },
});

export const upsert = mutation({
  args: {
    userId: v.string(),
    currency: v.string(),
    overallBalance: v.optional(v.number()),
    trackIncome: v.optional(v.boolean()),
    notificationsEnabled: v.optional(v.boolean()),
    dailyReminder: v.optional(v.boolean()),
    weeklyReport: v.optional(v.boolean()),
  },
  handler: async (ctx, { userId, ...fields }) => {
    await requireAuth(ctx, userId);
    const existing = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, fields);
    } else {
      await ctx.db.insert('user_preferences', { userId, ...fields });
    }
  },
});

export const updateCurrency = mutation({
  args: { userId: v.string(), currency: v.string() },
  handler: async (ctx, { userId, currency }) => {
    await requireAuth(ctx, userId);
    const existing = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();
    if (existing) await ctx.db.patch(existing._id, { currency });
  },
});

export const updateTrackIncome = mutation({
  args: { userId: v.string(), trackIncome: v.boolean() },
  handler: async (ctx, { userId, trackIncome }) => {
    await requireAuth(ctx, userId);
    const existing = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();
    if (existing) await ctx.db.patch(existing._id, { trackIncome });
  },
});

export const updateSubscription = mutation({
  args: {
    userId: v.string(),
    subscriptionStatus: v.union(
      v.literal('none'),
      v.literal('monthly'),
      v.literal('yearly'),
      v.literal('expired')
    ),
    subscriptionExpiresAt: v.optional(v.string()),
  },
  handler: async (ctx, { userId, subscriptionStatus, subscriptionExpiresAt }) => {
    await requireAuth(ctx, userId);
    const existing = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, { subscriptionStatus, subscriptionExpiresAt });
    }
  },
});

// Called by the webhook API route — no user auth, verified by REVENUECAT_WEBHOOK_SECRET in the API route
export const updateSubscriptionFromWebhook = mutation({
  args: {
    userId: v.string(),
    subscriptionStatus: v.union(
      v.literal('none'),
      v.literal('monthly'),
      v.literal('yearly'),
      v.literal('expired')
    ),
    subscriptionExpiresAt: v.optional(v.string()),
  },
  handler: async (ctx, { userId, subscriptionStatus, subscriptionExpiresAt }) => {
    const existing = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();
    if (existing) {
      await ctx.db.patch(existing._id, { subscriptionStatus, subscriptionExpiresAt });
    }
  },
});

export const updateHideBalance = mutation({
  args: { userId: v.string(), hideBalance: v.boolean() },
  handler: async (ctx, { userId, hideBalance }) => {
    await requireAuth(ctx, userId);
    const existing = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();
    if (existing) await ctx.db.patch(existing._id, { hideBalance });
  },
});

export const updateBalance = mutation({
  args: { userId: v.string(), desiredBalance: v.number() },
  handler: async (ctx, { userId, desiredBalance }) => {
    await requireAuth(ctx, userId);
    const txs = await ctx.db
      .query('transactions')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .collect();
    const txSum = txs.reduce((s, t) => s + t.amount, 0);
    const overallBalance = desiredBalance - txSum;
    const existing = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();
    if (existing) await ctx.db.patch(existing._id, { overallBalance });
  },
});

export const updateNotifications = mutation({
  args: {
    userId: v.string(),
    notificationsEnabled: v.boolean(),
    dailyReminder: v.optional(v.boolean()),
  },
  handler: async (ctx, { userId, notificationsEnabled, dailyReminder }) => {
    await requireAuth(ctx, userId);
    const existing = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();
    if (existing) {
      const patch: Record<string, unknown> = { notificationsEnabled };
      if (dailyReminder !== undefined) patch.dailyReminder = dailyReminder;
      await ctx.db.patch(existing._id, patch);
    }
  },
});
