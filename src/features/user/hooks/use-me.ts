"use client";

import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/features/user/api/get-me";

export function useMe() {
  const query = useQuery({
    queryKey: ["get-me"],
    queryFn: async () => {
      const { data } = await getMe();
      return data;
    },
  });

  return query;
}
