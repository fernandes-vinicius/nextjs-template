import type { User } from "next-auth";
import type { SignInCredentials } from "@/features/auth/types";
import { authApi } from "@/http";

type LoginResponseData = {
  token: string;
  refresh_token: string;
  user: User;
};

export async function login(credentials: SignInCredentials) {
  return authApi.post<LoginResponseData>("/auth/login", credentials);
}
