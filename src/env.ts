import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    NEXTAUTH_URL: z.url("Invalid URL format"),
    NEXTAUTH_SECRET: z.string().min(32, "NEXTAUTH_SECRET must be at least 32 characters long"),
  },
  client: {
    NEXT_PUBLIC_APP_URL: z.url("Invalid URL format"),
    NEXT_PUBLIC_API_URL: z.url("Invalid URL format"),
  },
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,

    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  },
  emptyStringAsUndefined: true,
  skipValidation: process.env.NODE_ENV === "production",
});
