"use server";

import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authConfig } from "@/lib/next-auth";

export async function authGuard() {
  const session = await getServerSession(authConfig);

  if (!session?.user) {
    redirect("/auth/sign-in");
  }
}
