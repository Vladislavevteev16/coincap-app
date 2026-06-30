import { coincapApi } from "@/shared/api/coincap";

import { useQuery } from "@tanstack/react-query";

const LIMIT_ASSETS = 2000;

export const useAllAssets = () => {
  return useQuery({
    queryKey: ["assets", "all"],
    queryFn: () =>
      coincapApi.getAssets({
        limit: LIMIT_ASSETS,
      }),
    select: (response) => response.data,
  });
};
