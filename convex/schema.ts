import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  accounts: defineTable({
    userId: v.string(),
    localId: v.string(),
    name: v.string(),
    type: v.string(),
    balance: v.number(),
    icon: v.string(),
    updatedAt: v.string(),
    deleted: v.optional(v.boolean()),
  })
    .index("by_user", ["userId"])
    .index("by_user_localId", ["userId", "localId"]),

  categories: defineTable({
    userId: v.string(),
    localId: v.string(),
    name: v.string(),
    icon: v.string(),
    type: v.string(),
    color: v.string(),
    updatedAt: v.string(),
    deleted: v.optional(v.boolean()),
  })
    .index("by_user", ["userId"])
    .index("by_user_localId", ["userId", "localId"]),

  transactions: defineTable({
    userId: v.string(),
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
    .index("by_user", ["userId"])
    .index("by_user_localId", ["userId", "localId"])
    .index("by_user_date", ["userId", "date"]),

  budgets: defineTable({
    userId: v.string(),
    localId: v.string(),
    categoryLocalId: v.string(),
    limitAmount: v.number(),
    month: v.string(),
    updatedAt: v.string(),
    deleted: v.optional(v.boolean()),
  })
    .index("by_user", ["userId"])
    .index("by_user_localId", ["userId", "localId"])
    .index("by_user_month", ["userId", "month"]),

  goals: defineTable({
    userId: v.string(),
    localId: v.string(),
    name: v.string(),
    icon: v.string(),
    target: v.number(),
    saved: v.number(),
    color: v.string(),
    updatedAt: v.string(),
    deleted: v.optional(v.boolean()),
  })
    .index("by_user", ["userId"])
    .index("by_user_localId", ["userId", "localId"]),

  settings: defineTable({
    userId: v.string(),
    key: v.string(),
    value: v.string(),
    updatedAt: v.string(),
  })
    .index("by_user", ["userId"])
    .index("by_user_key", ["userId", "key"]),
});
