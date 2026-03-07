import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const r2 = new S3Client({
  region: 'auto',
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY!,
  },
});

interface ScanResult {
  title: string;
  amount: number;
  date: string | null;
  isExpense: boolean;
  note: string | null;
}

export async function POST(req: NextRequest) {
  try {
    const { imageBase64, mimeType = 'image/jpeg' } = await req.json() as {
      imageBase64: string;
      mimeType?: string;
    };

    if (!imageBase64) {
      return NextResponse.json({ error: 'No image provided' }, { status: 400 });
    }

    // Run OpenAI vision and R2 upload in parallel
    const [visionResult, uploadKey] = await Promise.all([
      // 1. Parse receipt with GPT-4o vision
      openai.chat.completions.create({
        model: 'gpt-4o',
        max_tokens: 300,
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: { url: `data:${mimeType};base64,${imageBase64}` },
              },
              {
                type: 'text',
                text: `Extract transaction info from this receipt. Respond ONLY with valid JSON (no markdown, no code block):
{
  "title": "merchant or store name",
  "amount": 123.45,
  "date": "YYYY-MM-DD or null if unclear",
  "isExpense": true,
  "note": "brief description of items or null"
}
Rules: amount must be a positive number. isExpense is almost always true for receipts. If you cannot read the receipt clearly, make your best guess.`,
              },
            ],
          },
        ],
      }),
      // 2. Upload image to R2
      (async () => {
        const buffer = Buffer.from(imageBase64, 'base64');
        const key = `receipts/${Date.now()}-${Math.random().toString(36).slice(2)}.jpg`;
        await r2.send(
          new PutObjectCommand({
            Bucket: process.env.R2_BUCKET_NAME!,
            Key: key,
            Body: buffer,
            ContentType: mimeType,
          })
        );
        return key;
      })(),
    ]);

    // Parse GPT-4o response
    const raw = visionResult.choices[0]?.message?.content?.trim() ?? '';
    let parsed: ScanResult;
    try {
      parsed = JSON.parse(raw);
    } catch {
      const match = raw.match(/\{[\s\S]*\}/);
      if (!match) return NextResponse.json({ error: 'Could not parse receipt' }, { status: 422 });
      parsed = JSON.parse(match[0]);
    }

    const receiptUrl = `${process.env.R2_PUBLIC_URL}/${uploadKey}`;

    return NextResponse.json({
      title: parsed.title ?? '',
      amount: Math.abs(parsed.amount ?? 0),
      date: parsed.date ?? null,
      isExpense: parsed.isExpense ?? true,
      note: parsed.note ?? '',
      receiptUrl,
    });
  } catch (err) {
    console.error('[scan-receipt]', err);
    return NextResponse.json({ error: 'Scan failed' }, { status: 500 });
  }
}
