import { withAuth } from "next-auth/middleware";
import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';

// ── Auth login rate limiting ──────────────────────────────────────────
// 5 attempts per IP per 15-minute window on auth endpoints
const authRateLimitMap = new Map<string, { count: number; resetAt: number }>();
const AUTH_RATE_LIMIT = 5;
const AUTH_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

function isAuthRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = authRateLimitMap.get(ip);
  if (!record || now > record.resetAt) {
    authRateLimitMap.set(ip, { count: 1, resetAt: now + AUTH_WINDOW_MS });
    return false;
  }
  if (record.count >= AUTH_RATE_LIMIT) return true;
  record.count++;
  return false;
}

// ── Dashboard auth middleware ─────────────────────────────────────────
const authMiddleware = withAuth({
  pages: {
    signIn: "/login",
  },
});

export default async function middleware(request: NextRequest, event: NextFetchEvent) {
  // Root redirect → /home
  if (request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url));
  }

  // Rate-limit auth callback to prevent brute-force login attempts
  if (request.nextUrl.pathname.startsWith('/api/auth')) {
    const ip = request.headers.get('x-real-ip') ?? request.headers.get('x-forwarded-for')?.split(',')[0].trim() ?? 'unknown';
    if (isAuthRateLimited(ip)) {
      return NextResponse.json(
        { error: 'Too many login attempts. Please try again later.' },
        { status: 429 }
      );
    }
  }

  // Protect dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return (authMiddleware as any)(request, event);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*", "/api/auth/:path*"],
};
