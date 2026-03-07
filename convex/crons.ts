import { cronJobs } from 'convex/server';
import { internal } from './_generated/api';

const crons = cronJobs();

// Run every day at 00:05 UTC
// - Processes recurring payments due today (respects per-payment billingDay)
// - On 1st of month: carries forward monthly budgets to new month
crons.daily(
  'process recurring payments',
  { hourUTC: 0, minuteUTC: 5 },
  internal.recurring.processMonthly,
  {}
);

export default crons;
