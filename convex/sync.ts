import { v } from "convex/values";
import { mutation } from "./_generated/server";
import { requireAuth } from "./lib/auth";

/**
 * Deletes all data for a user (called on account deletion).
 */
export const deleteUserData = mutation({
  args: { userId: v.string() },
  handler: async (ctx, args) => {
    const userId = args.userId;
    await requireAuth(ctx, userId);

    const tables = [
      "parent_categories",
      "accounts",
      "categories",
      "transactions",
      "budgets",
      "goals",
      "settings",
      "user_preferences",
      "monthly_budgets",
      "recurring_payments",
      "category_rules",
    ] as const;

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
