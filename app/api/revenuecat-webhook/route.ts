import { ConvexHttpClient } from 'convex/browser';
import { api } from '@/convex/_generated/api';
import { NextRequest, NextResponse } from 'next/server';

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);
const WEBHOOK_SECRET = process.env.REVENUECAT_WEBHOOK_SECRET ?? '';

// RevenueCat event types we care about
const ACTIVE_EVENTS = new Set([
  'INITIAL_PURCHASE',
  'RENEWAL',
  'PRODUCT_CHANGE',
  'UNCANCELLATION',
]);
const EXPIRED_EVENTS = new Set([
  'EXPIRATION',
  'CANCELLATION',
  'BILLING_ISSUE',
]);
const TRANSFER_EVENTS = new Set(['TRANSFER']);

function getSubStatus(
  eventType: string,
  productId: string
): 'monthly' | 'yearly' | 'expired' | null {
  if (EXPIRED_EVENTS.has(eventType)) return 'expired';
  if (ACTIVE_EVENTS.has(eventType)) {
    if (productId.includes('yearly')) return 'yearly';
    if (productId.includes('monthly')) return 'monthly';
    return 'yearly'; // fallback for any active pro product
  }
  return null; // ignore other event types
}

export async function POST(req: NextRequest) {
  // Validate shared secret
  const authHeader = req.headers.get('authorization') ?? '';
  const secret = authHeader.replace('Bearer ', '').trim();
  if (WEBHOOK_SECRET && secret !== WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const event = body?.event;
  if (!event) {
    return NextResponse.json({ ok: true }); // ignore malformed
  }

  const eventType: string = event.type ?? '';

  // Handle TRANSFER first — these events don't have app_user_id at all
  // They use transferred_from/transferred_to arrays instead
  if (TRANSFER_EVENTS.has(eventType)) {
    const fromUserId: string = (event.transferred_from ?? [])[0] ?? '';
    const toUserId: string = (event.transferred_to ?? [])[0] ?? '';
    if (!fromUserId || !toUserId || fromUserId === toUserId) {
      return NextResponse.json({ ok: true });
    }
    console.log(`[RC Webhook] TRANSFER: ${fromUserId} → ${toUserId}`);
    try {
      await convex.mutation(api.preferences.transferSubscription, {
        fromUserId,
        toUserId,
      });
    } catch (err) {
      console.error('[RC Webhook] TRANSFER Convex mutation failed:', err);
      return NextResponse.json({ error: 'Convex error' }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  }

  // All other events require app_user_id
  const userId: string = event.app_user_id ?? '';
  const originalUserId: string = event.original_app_user_id ?? '';
  const productId: string = event.product_id ?? '';
  const expiresAtMs: number | undefined = event.expiration_at_ms;

  if (!userId) {
    return NextResponse.json({ ok: true }); // nothing to update
  }

  // Security: only update if the purchase belongs to this user
  // Prevents shared Apple ID exploit where User B claims User A's subscription
  if (originalUserId && userId !== originalUserId) {
    console.log(`[RC Webhook] Skipping — app_user_id (${userId}) !== original_app_user_id (${originalUserId})`);
    return NextResponse.json({ ok: true });
  }

  const status = getSubStatus(eventType, productId);
  if (!status) {
    // Not an event we care about
    return NextResponse.json({ ok: true });
  }

  const expiresAt = expiresAtMs
    ? new Date(expiresAtMs).toISOString()
    : undefined;

  try {
    await convex.mutation(api.preferences.updateSubscriptionFromWebhook, {
      userId,
      subscriptionStatus: status,
      subscriptionExpiresAt: expiresAt,
    });
  } catch (err) {
    console.error('[RC Webhook] Convex mutation failed:', err);
    return NextResponse.json({ error: 'Convex error' }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
