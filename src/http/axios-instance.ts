import axios from "axios";
import { env } from "@/env";

function createApi(baseURL: string) {
  const instance = axios.create({
    baseURL,
  });

  // setupInterceptors(instance);
  return instance;
}

export const authApi = createApi(env.NEXT_PUBLIC_API_URL);
