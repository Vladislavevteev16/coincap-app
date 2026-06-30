import { useAppSelector } from "@/app/store";

import {
  selectTotalPortfolioPrice,
  selectTotalProfit,
  selectTotalProfitPercent,
  selectQtyAssets,
  selectAssetList,
} from "@/entities/portfolio/model/portfolio.slice";

export const usePortfolioStats = () => {
  const totalPrice = useAppSelector(selectTotalPortfolioPrice);
  const totalProfit = useAppSelector(selectTotalProfit);
  const totalProfitPercent = useAppSelector(selectTotalProfitPercent);
  const assetQuantity = useAppSelector(selectQtyAssets);
  const assetPortfolioItems = useAppSelector(selectAssetList);

  const isPositive = totalProfit >= 0;
  const formattedProfit = Math.abs(totalProfit).toFixed(2);
  const formattedPercent = Math.abs(totalProfitPercent).toFixed(2);

  return {
    totalPrice,
    totalProfit,
    totalProfitPercent,
    assetQuantity,
    assetPortfolioItems,
    isPositive,
    formattedProfit,
    formattedPercent,
  };
};
