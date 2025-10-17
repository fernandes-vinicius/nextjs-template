import type { User } from "@/features/user/types";
import { authApi } from "@/http";

export async function getMe() {
  return authApi.get<User>("/user/me");
}
