import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import z from "zod";

const CredentialsSchema = z.object({
  email: z.email(),
  password: z.string(),
});

export const authConfig: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const validatedFields = CredentialsSchema.safeParse(credentials);

        if (!validatedFields.success) {
          return null;
        }

        const { email } = validatedFields.data;

        // TODO Login

        return { id: crypto.randomUUID(), email, name: "John Doe", image: "https://github.com/shadcn-ui.png" };
      },
    }),
  ],
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  debug: process.env.NODE_ENV !== "production",
};
