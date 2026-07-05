import { useQuery } from "@tanstack/react-query";

import { coincapApi } from "@/shared/api/coincap";

const MS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;

const DAY_IN_MS =
  HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MS_IN_SECOND;

export const useAsset = (id: string) => {
  return useQuery({
    queryKey: ["asset", id],
    queryFn: () => coincapApi.getAsset(id),
    enabled: !!id,
    retry: 1,
  });
};

export const useAssetHistory = (id: string) => {
  return useQuery({
    queryKey: ["assetHistory", id],
    queryFn: () => {
      const end = Date.now();
      const start = end - 30 * DAY_IN_MS;
      return coincapApi.getAssetHistory(id, {
        interval: "d1",
        start,
        end,
      });
    },
    enabled: !!id,
    retry: 1,
  });
};
