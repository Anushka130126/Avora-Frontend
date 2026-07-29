import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const ContactSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  email: z.string().email('Invalid email address'),
  company: z.string().max(100).optional(),
  serviceType: z.string().max(50).optional(),
  focusArea: z.string().max(50).optional(),
  industry: z.string().max(50).optional(),
  message: z.string().min(1, 'Message is required').max(2000),
  // Honeypot: no max constraint so bot-filled values pass validation
  // and reach the silent-success trap below instead of getting a 422
  _honeypot: z.string().optional(),
});

// Rate limit — 10 submissions per 15 min per IP
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 10;
const WINDOW_MS = 15 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }
  if (record.count >= RATE_LIMIT) return true;
  record.count++;
  return false;
}

export async function POST(req: NextRequest) {
  // Use x-real-ip (set by Vercel's edge from TCP connection, not client-suppliable)
  // Fall back to x-forwarded-for only as last resort
  const ip =
    req.headers.get('x-real-ip') ??
    req.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
    'unknown';

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Please try again later.' },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? 'Validation failed.' },
      { status: 422 }
    );
  }

  const { _honeypot, ...data } = parsed.data;

  // Honeypot trap: bot fills hidden field → silent fake success (bot never learns)
  if (_honeypot && _honeypot.length > 0) {
    return NextResponse.json({ success: true });
  }

  const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

  // Dev mode: no backend configured — log locally and succeed gracefully
  if (!GOOGLE_SCRIPT_URL) {
    console.warn('[Contact] GOOGLE_SCRIPT_URL not set — logging submission locally:', data);
    return NextResponse.json({ success: true });
  }

  try {
    const res = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) {
      console.error('[Contact] Google Script returned non-OK status:', res.status);
      return NextResponse.json(
        { error: 'Submission could not be delivered. Please try again or email us directly.' },
        { status: 502 }
      );
    }
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[Contact] Google Script submission error:', err);
    return NextResponse.json(
      { error: 'Submission could not be delivered. Please try again or email us directly.' },
      { status: 502 }
    );
  }
}
