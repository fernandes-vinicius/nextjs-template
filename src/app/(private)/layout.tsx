import { authGuard } from "@/features/auth/actions/auth-guard";
import type { LayoutProps } from "@/types/common";

export default async function PrivateLayout({ children }: LayoutProps) {
  await authGuard();

  return children;
}
