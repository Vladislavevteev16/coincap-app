import { coincapApi } from "@/shared/api/coincap";

import { useQuery } from "@tanstack/react-query";

const LIMIT_ASSETS = 100;
const PAGE_VIEW_QTY = 10;

export const useCryptoTable = (page: number) => {
  return useQuery({
    queryKey: ["assets", page],
    queryFn: () =>
      coincapApi.getAssets({
        limit: LIMIT_ASSETS,
        offset: (page - 1) * PAGE_VIEW_QTY,
      }),

    select: (response) => response.data,
  });
};
