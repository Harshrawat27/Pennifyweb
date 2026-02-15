import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
// Sync functions for mobile app

export const pushBatch = mutation({
  args: {
    userId: v.string(),
    accounts: v.array(
      v.object({
        localId: v.string(),
        name: v.string(),
        type: v.string(),
        balance: v.number(),
        icon: v.string(),
        updatedAt: v.string(),
        deleted: v.optional(v.boolean()),
      })
    ),
    categories: v.array(
      v.object({
        localId: v.string(),
        name: v.string(),
        icon: v.string(),
        type: v.string(),
        color: v.string(),
        updatedAt: v.string(),
        deleted: v.optional(v.boolean()),
      })
    ),
    transactions: v.array(
      v.object({
        localId: v.string(),
        title: v.string(),
        amount: v.number(),
        note: v.string(),
        date: v.string(),
        categoryLocalId: v.string(),
        accountLocalId: v.string(),
        updatedAt: v.string(),
        deleted: v.optional(v.boolean()),
      })
    ),
    budgets: v.array(
      v.object({
        localId: v.string(),
        categoryLocalId: v.string(),
        limitAmount: v.number(),
        month: v.string(),
        updatedAt: v.string(),
        deleted: v.optional(v.boolean()),
      })
    ),
    goals: v.array(
      v.object({
        localId: v.string(),
        name: v.string(),
        icon: v.string(),
        target: v.number(),
        saved: v.number(),
        color: v.string(),
        updatedAt: v.string(),
        deleted: v.optional(v.boolean()),
      })
    ),
    settings: v.array(
      v.object({
        key: v.string(),
        value: v.string(),
        updatedAt: v.string(),
      })
    ),
  },
  handler: async (ctx, args) => {
    const userId = args.userId;

    async function upsertByLocalId(
      table: "accounts" | "categories" | "transactions" | "budgets" | "goals",
      record: Record<string, unknown>
    ) {
      const existing = await ctx.db
        .query(table)
        .withIndex("by_user_localId", (q) =>
          q.eq("userId", userId).eq("localId", record.localId as string)
        )
        .unique();

      if (existing) {
        if ((record.updatedAt as string) >= existing.updatedAt) {
          await ctx.db.patch(existing._id, record);
        }
      } else {
        await ctx.db.insert(table, { userId, ...record } as never);
      }
    }

    async function upsertSetting(record: {
      key: string;
      value: string;
      updatedAt: string;
    }) {
      const existing = await ctx.db
        .query("settings")
        .withIndex("by_user_key", (q) =>
          q.eq("userId", userId).eq("key", record.key)
        )
        .unique();

      if (existing) {
        if (record.updatedAt >= existing.updatedAt) {
          await ctx.db.patch(existing._id, record);
        }
      } else {
        await ctx.db.insert("settings", { userId, ...record });
      }
    }

    for (const r of args.accounts) await upsertByLocalId("accounts", r);
    for (const r of args.categories) await upsertByLocalId("categories", r);
    for (const r of args.transactions)
      await upsertByLocalId("transactions", r);
    for (const r of args.budgets) await upsertByLocalId("budgets", r);
    for (const r of args.goals) await upsertByLocalId("goals", r);
    for (const r of args.settings) await upsertSetting(r);
  },
});

export const pullAll = query({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const userId = args.userId;
    if (!userId) return null;

    const accounts = await ctx.db
      .query("accounts")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    const categories = await ctx.db
      .query("categories")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    const transactions = await ctx.db
      .query("transactions")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    const budgets = await ctx.db
      .query("budgets")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    const goals = await ctx.db
      .query("goals")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();
    const settings = await ctx.db
      .query("settings")
      .withIndex("by_user", (q) => q.eq("userId", userId))
      .collect();

    return { accounts, categories, transactions, budgets, goals, settings };
  },
});

export const deleteUserData = mutation({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const userId = args.userId;

    // Delete all user data from app tables
    const tables = ["accounts", "categories", "transactions", "budgets", "goals", "settings"] as const;

    for (const table of tables) {
      const rows = await ctx.db
        .query(table)
        .withIndex("by_user", (q) => q.eq("userId", userId))
        .collect();
      for (const row of rows) {
        await ctx.db.delete(row._id);
      }
    }
  },
});
