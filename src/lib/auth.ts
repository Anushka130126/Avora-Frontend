import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "admin@avora.io" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // This is a mock authentication for testing Phase 1
        // In a real application, you'd check against the database using Prisma:
        // const user = await prisma.user.findUnique({ where: { email: credentials?.email } });
        
        if (credentials?.email === "admin@avora.io" && credentials?.password === "password") {
          return {
            id: "1",
            name: "Admin User",
            email: "admin@avora.io",
            role: "ADMIN"
          } as any; // Cast to bypass type checking for custom role field
        }
        
        return null;
      }
    })
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role;
      }
      return token;
    },
    async session({ session, token }) {
      if (session?.user) {
        (session.user as any).role = token.role;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET || "default_secret_for_local_dev",
};
