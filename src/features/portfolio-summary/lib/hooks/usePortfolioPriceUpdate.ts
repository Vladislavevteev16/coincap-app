import { useAppDispatch } from "@/app/store";

import { useEffect } from "react";

import { updatePortfolioPrices } from "@/entities/portfolio/model";

import { useAllAssets } from "./useAllAssets";

export const usePortfolioPriceUpdate = () => {
  const dispatch = useAppDispatch();

  const { data: currentAssets, isLoading, isError, refetch } = useAllAssets();

  useEffect(() => {
    if (currentAssets && !isLoading) {
      dispatch(updatePortfolioPrices(currentAssets));
    }
  }, [currentAssets, isLoading, dispatch]);

  return {
    isLoading,
    isError,
    refetch,
  };
};
