import { v } from 'convex/values';
import { action } from './_generated/server';
import { api, internal } from './_generated/api';

export const categorizeTransactions = action({
  args: {
    userId: v.string(),
    transactions: v.array(
      v.object({ id: v.string(), title: v.string() })
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

    const categoryNames = categories.map((c) => c.name);
    const txList = transactions.map((t, i) => `${i + 1}. "${t.title}"`).join('\n');

    const prompt = `You are a personal finance categorizer. Assign each transaction the most appropriate category from the provided list.

Available categories: ${categoryNames.join(', ')}

Transactions:
${txList}

Respond with ONLY a JSON object in this exact format:
{
  "results": [
    {"index": 1, "category": "exact category name or null"},
    {"index": 2, "category": "exact category name or null"}
  ]
}`;

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
