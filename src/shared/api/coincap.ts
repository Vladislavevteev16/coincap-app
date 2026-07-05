import { coincapClient } from "./base";

import type {
  AssetHistoryResponse,
  AssetResponse,
  AssetsResponse,
  GetAssetHistoryParams,
  GetAssetsParams,
} from "./coincap.types";

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
  getAsset: (id: string): Promise<AssetResponse> =>
    coincapClient
      .get<AssetResponse>(`/assets/${id}`)
      .then((response) => response.data),

  getAssetHistory: (
    id: string,
    params?: GetAssetHistoryParams,
  ): Promise<AssetHistoryResponse> =>
    coincapClient
      .get<AssetHistoryResponse>(`/assets/${id}/history`, {
        params: {
          interval: params?.interval || "d1",
          start: params?.start,
          end: params?.end,
        },
      })
      .then((response) => response.data),
};
