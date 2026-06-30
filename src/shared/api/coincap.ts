import { coincapClient } from "./base";

import type { AssetsResponse, GetAssetsParams } from "./coincap.types";

export const coincapApi = {
  getAssets: (params?: GetAssetsParams): Promise<AssetsResponse> =>
    coincapClient
      .get<AssetsResponse>("/assets", {
        params,
        transformResponse: (data) => {
          try {
            const parsedData = JSON.parse(data) as AssetsResponse;

            return {
              ...parsedData,
              data: parsedData.data.map((item) => ({
                ...item,
                priceUsd: Number(item.priceUsd).toFixed(2),
              })),
            };
          } catch {
            return data;
          }
        },
      })
      .then((response) => response.data),
  getAsset: (id: string): Promise<AssetsResponse> =>
    coincapClient
      .get<AssetsResponse>(`/assets/${id}`)
      .then((response) => response.data),
};
