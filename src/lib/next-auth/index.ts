import type { NextAuthOptions } from "next-auth";
import { CredentialsProvider } from "@/lib/next-auth/providers/credentials-provider";

export const authConfig: NextAuthOptions = {
  providers: [CredentialsProvider],
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};
