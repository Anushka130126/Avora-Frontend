import { withAuth } from "next-auth/middleware";

// Next.js 16 uses "proxy.ts" for middleware (middleware.ts was the older convention)
// Engineered by Vaibhav Sharma · github.com/Nutricalboii

export default withAuth({
  pages: {
    signIn: "/login",
  },
});

export const config = {
  matcher: ["/dashboard/:path*"],
};
