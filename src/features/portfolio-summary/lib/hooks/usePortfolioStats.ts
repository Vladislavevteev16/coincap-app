import { useAppSelector } from "@/app/store";

import {
  selectTotalPortfolioPrice,
  selectTotalProfit,
  selectTotalProfitPercent,
  selectAssetList,
} from "@/entities/portfolio/model";

export const usePortfolioStats = () => {
  const totalPrice = useAppSelector(selectTotalPortfolioPrice);
  const totalProfit = useAppSelector(selectTotalProfit);
  const totalProfitPercent = useAppSelector(selectTotalProfitPercent);
  const assetPortfolioItems = useAppSelector(selectAssetList);

  const isPositive = totalProfit >= 0;
  const formattedProfit = Math.abs(totalProfit).toFixed(2);
  const formattedPercent = Math.abs(totalProfitPercent).toFixed(2);

  return {
    totalPrice,
    totalProfit,
    totalProfitPercent,

    assetPortfolioItems,
    isPositive,
    formattedProfit,
    formattedPercent,
  };
};
