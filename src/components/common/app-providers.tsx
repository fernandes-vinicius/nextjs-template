"use client";

import { SessionProvider } from "next-auth/react";
import { QueryProvider } from "@/components/common/query-provider";
import { ThemeProvider } from "@/components/common/theme-provider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <SessionProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </SessionProvider>
    </QueryProvider>
  );
}
