"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <h1 className="text-center font-semibold text-xl tracking-tight">Hello World!</h1>
        <Button onClick={() => signOut({ callbackUrl: "/auth/sign-in" })}>Sign-out</Button>
      </div>
    </div>
  );
}
