import { v } from 'convex/values';
import { action } from './_generated/server';
import { api, internal } from './_generated/api';
import type { Id } from './_generated/dataModel';

export const categorizeTransactions = action({
  args: {
    userId: v.string(),
    transactions: v.array(
      v.object({ id: v.string(), title: v.string(), isExpense: v.boolean() })
    ),
  },
  handler: async (ctx, { userId, transactions }) => {
    if (transactions.length === 0) return;

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error('[categorize] OPENAI_API_KEY not set');
      return;
    }

    // Fetch user's categories
    const categories = await ctx.runQuery(api.categories.list, { userId });
    if (!categories || categories.length === 0) return;

    const expenseCategories = categories.filter((c) => c.type === 'expense').map((c) => c.name);
    const incomeCategories = categories.filter((c) => c.type === 'income').map((c) => c.name);
    const txList = transactions
      .map((t, i) => `${i + 1}. "${t.title}" (${t.isExpense ? 'expense' : 'income'})`)
      .join('\n');

    const prompt = `You are a personal finance categorizer. Assign each transaction the most appropriate category.

Expense categories: ${expenseCategories.join(', ')}
Income categories: ${incomeCategories.join(', ')}

Rules:
- For expense transactions, only pick from expense categories
- For income transactions, only pick from income categories

Transactions:
${txList}

Respond with ONLY a JSON object in this exact format:
{
  "results": [
    {"index": 1, "category": "exact category name or null"},
    {"index": 2, "category": "exact category name or null"}
  ]
}`;

    console.log('[categorize] transactions received:', transactions.map(t => `${t.title}(${t.isExpense ? 'exp' : 'inc'})`));
    console.log('[categorize] expense categories:', expenseCategories, '| income:', incomeCategories);

    let results: Array<{ index: number; category: string | null }>;
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          response_format: { type: 'json_object' },
          temperature: 0,
        }),
      });

      if (!response.ok) {
        console.error('[categorize] OpenAI error:', response.status);
        return;
      }

      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) return;

      const parsed = JSON.parse(content);
      console.log('[categorize] OpenAI raw results:', JSON.stringify(parsed));
      results = parsed.results;
      if (!Array.isArray(results)) return;
    } catch (e) {
      console.error('[categorize] Failed to parse OpenAI response:', e);
      return;
    }

    // Build category name → id map (case-insensitive)
    const catMap = new Map(
      categories.map((c) => [c.name.toLowerCase(), c._id])
    );

    // Patch each transaction with its matched category
    for (const result of results) {
      if (!result.category) continue;
      const tx = transactions[result.index - 1];
      if (!tx) continue;
      const catId = catMap.get(result.category.toLowerCase());
      console.log('[categorize] result:', result.index, result.category, '→ catId:', catId, 'tx:', tx?.title);
      if (!catId) continue;
      try {
        await ctx.runMutation(internal.transactions.setCategoryId, {
          id: tx.id as any,
          categoryId: catId as any,
        });
      } catch (e) {
        console.error('[categorize] Failed to patch transaction:', tx.id, e);
      }
    }
  },
});

export const categorizeRecurringPayment = action({
  args: {
    userId: v.string(),
    recurringPaymentId: v.string(),
    name: v.string(),
  },
  handler: async (ctx, { userId, recurringPaymentId, name }) => {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return;

    const categories = await ctx.runQuery(api.categories.listByType, { userId, type: 'expense' });
    if (!categories || categories.length === 0) return;

    const categoryNames = categories.map((c: { name: string }) => c.name);
    const prompt = `You are a personal finance categorizer. Assign the most appropriate expense category to this recurring payment.

Available categories: ${categoryNames.join(', ')}

Recurring payment: "${name}"

Respond with ONLY a JSON object: {"category": "exact category name or null"}`;

    let categoryName: string | null = null;
    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: [{ role: 'user', content: prompt }],
          response_format: { type: 'json_object' },
          temperature: 0,
        }),
      });
      if (!response.ok) return;
      const data = await response.json();
      const content = data.choices?.[0]?.message?.content;
      if (!content) return;
      const parsed = JSON.parse(content);
      categoryName = parsed.category ?? null;
    } catch (e) {
      console.error('[categorize recurring] OpenAI error:', e);
      return;
    }

    if (!categoryName) return;

    const catMap = new Map(
      categories.map((c: { name: string; _id: Id<'categories'> }) => [c.name.toLowerCase(), c._id])
    );
    const catId = catMap.get(categoryName.toLowerCase());
    if (!catId) return;

    // Patch the recurring_payments record
    await ctx.runMutation(internal.recurring.setRecurringCategoryId, {
      id: recurringPaymentId as Id<'recurring_payments'>,
      categoryId: catId,
    });

    // Patch today's transaction for this payment if one was created immediately
    const today = new Date().toISOString().slice(0, 10);
    const txs = await ctx.runQuery(internal.transactions.getByTitleAndDate, {
      userId,
      title: name,
      date: today,
    });
    for (const tx of (txs as Array<{ _id: Id<'transactions'> }>)) {
      try {
        await ctx.runMutation(internal.transactions.setCategoryId, {
          id: tx._id,
          categoryId: catId,
        });
      } catch (e) {
        console.error('[categorize recurring] Failed to patch transaction:', e);
      }
    }
  },
});
