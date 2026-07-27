import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";

// Engineered by Vaibhav Sharma · github.com/Nutricalboii

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@avora.io" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Runtime-only env validation — fails fast on login attempt if not configured
        if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD_HASH) {
          console.error('[auth] ADMIN_EMAIL or ADMIN_PASSWORD_HASH env vars are not set');
          return null;
        }
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        // Constant-time email comparison + bcrypt hash comparison
        const emailMatch = credentials.email === process.env.ADMIN_EMAIL;
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          process.env.ADMIN_PASSWORD_HASH
        );
        if (emailMatch && passwordMatch) {
          return {
            id: '1',
            name: 'Admin',
            email: process.env.ADMIN_EMAIL,
            role: 'ADMIN',
          } as any;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = (user as any).role;
      return token;
    },
    async session({ session, token }) {
      if (session?.user) (session.user as any).role = token.role;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
