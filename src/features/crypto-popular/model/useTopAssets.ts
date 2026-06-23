import { useQuery } from "@tanstack/react-query";

import { coincapApi } from "@/shared/api/coincap";

export const useTopAssets = (limit: number = 3) => {
  return useQuery({
    queryKey: ["topAssets", limit],
    queryFn: () =>
      coincapApi.getAssets({
        limit,
        sort: "marketCapUsd",
        order: "desc",
      }),
    select: (response) => response.data,
    refetchInterval: 30 * 1000,
    staleTime: 10 * 1000,
  });
};
