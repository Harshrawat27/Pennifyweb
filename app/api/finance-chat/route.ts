import OpenAI from 'openai';
import { NextRequest } from 'next/server';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req: NextRequest) {
  const { question, transactions, preferences } = await req.json();

  if (!question || !transactions) {
    return new Response(JSON.stringify({ error: 'Missing required fields' }), {
      status: 400,
    });
  }

  const currency = preferences?.currency ?? 'INR';
  const currencySymbol =
    currency === 'INR'
      ? '₹'
      : currency === 'USD'
        ? '$'
        : currency === 'EUR'
          ? '€'
          : currency;
  const monthlyBudget = preferences?.monthlyBudget ?? null;

  const txSummary = transactions.map((tx: any) => ({
    date: tx.date,
    title: tx.title,
    amount: tx.amount,
    category: tx.categoryName ?? 'Uncategorized',
    note: tx.note ?? '',
  }));

  const systemPrompt = `You are Penny, a smart personal finance assistant built into the Spendler app. You have access to the user's transaction history for the past 6 months.

User preferences:
- Currency: ${currency} (${currencySymbol})
${monthlyBudget ? `- Monthly Budget: ${currencySymbol}${monthlyBudget}` : ''}

Transaction data (${txSummary.length} transactions, last 6 months):
${JSON.stringify(txSummary, null, 2)}

Rules:
- Negative amounts = expenses, positive amounts = income
- Use ${currencySymbol} symbol for all amounts
- Be concise but accurate with numbers
- For data comparisons or breakdowns, use a clean markdown table
- If the user asks for something you cannot compute from this data, say so clearly
- Do not make up or estimate data — only use what is provided
- Keep responses friendly and conversational`;

  const stream = await openai.chat.completions.create({
    model: 'gpt-4o',
    stream: true,
    temperature: 0.3,
    messages: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: question },
    ],
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content ?? '';
        if (text) {
          controller.enqueue(
            encoder.encode(`data: ${JSON.stringify({ text })}\n\n`)
          );
        }
      }
      controller.enqueue(encoder.encode('data: [DONE]\n\n'));
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      Connection: 'keep-alive',
    },
  });
}
