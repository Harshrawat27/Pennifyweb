import { ConvexError } from 'convex/values';
import type { MutationCtx, QueryCtx } from '../_generated/server';

/**
 * Verifies the caller is authenticated AND that they are acting on their own data.
 * Throws ConvexError if:
 *  - No valid JWT is present (unauthenticated)
 *  - The JWT subject doesn't match the requested userId (unauthorized / forged userId)
 */
export async function requireAuth(
  ctx: QueryCtx | MutationCtx,
  userId: string
): Promise<void> {
  const identity = await ctx.auth.getUserIdentity();
  if (!identity) {
    throw new ConvexError('Unauthenticated');
  }
  if (identity.subject !== userId) {
    throw new ConvexError('Unauthorized');
  }
}
