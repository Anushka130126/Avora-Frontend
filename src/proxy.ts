import { withAuth } from "next-auth/middleware";
import { NextResponse } from 'next/server';
import type { NextRequest, NextFetchEvent } from 'next/server';

const authMiddleware = withAuth({
  pages: {
    signIn: "/login",
  },
});

export default async function middleware(request: NextRequest, event: NextFetchEvent) {
  if (request.nextUrl.pathname === '/') {
    const hasSeenIntro = request.cookies.has('avora_intro_seen');
    if (hasSeenIntro) {
      return NextResponse.redirect(new URL('/home', request.url));
    }
    return NextResponse.redirect(new URL('/intro', request.url));
  }
  
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return (authMiddleware as any)(request, event);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/dashboard/:path*"],
};
