/** biome-ignore-all lint/correctness/noUnusedImports: <> */
import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";
import type { User } from "@/features/user/types";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    token: string;
    refresh_token: string;
    user: User;
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** Access and Refresh Token */
    token?: string;
    refresh_token?: string;
  }
}
