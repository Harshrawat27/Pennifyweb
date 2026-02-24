import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const get = query({
  args: { userId: v.string() },
  handler: async (ctx, { userId }) => {
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
    trackIncome: v.optional(v.boolean()),
    notificationsEnabled: v.optional(v.boolean()),
    dailyReminder: v.optional(v.boolean()),
    weeklyReport: v.optional(v.boolean()),
  },
  handler: async (ctx, { userId, ...fields }) => {
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
    const existing = await ctx.db
      .query('user_preferences')
      .withIndex('by_user', (q) => q.eq('userId', userId))
      .first();
    if (existing) await ctx.db.patch(existing._id, { trackIncome });
  },
});

export const updateNotifications = mutation({
  args: {
    userId: v.string(),
    notificationsEnabled: v.boolean(),
    dailyReminder: v.optional(v.boolean()),
  },
  handler: async (ctx, { userId, notificationsEnabled, dailyReminder }) => {
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
