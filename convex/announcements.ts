import { query } from './_generated/server';

export const listActive = query({
  args: {},
  handler: async (ctx) => {
    const now = new Date().toISOString();
    const all = await ctx.db
      .query('announcements')
      .collect();
    return all.filter(
      (a) => a.isActive && (!a.expiresAt || a.expiresAt > now)
    );
  },
});
