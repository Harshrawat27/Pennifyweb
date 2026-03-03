import { cronJobs } from 'convex/server';
import { internal } from './_generated/api';

const crons = cronJobs();

// Run on the 1st of every month at 00:05 UTC
crons.monthly(
  'process recurring payments',
  { day: 1, hourUTC: 0, minuteUTC: 5 },
  internal.recurring.processMonthly,
  {}
);

export default crons;
