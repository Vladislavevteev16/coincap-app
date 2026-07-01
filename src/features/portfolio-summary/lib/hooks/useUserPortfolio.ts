import { useState } from "react";

import { usePortfolioStats } from "./usePortfolioStats";

import { usePortfolioPriceUpdate } from "./usePortfolioPriceUpdate";

export const useUserPortfolio = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  usePortfolioPriceUpdate();

  const handleOpenPortfolioModal = () => setIsOpenModal(true);
  const handleClosePortfolioModal = () => setIsOpenModal(false);

  const {
    assetPortfolioItems,
    totalPrice,
    totalProfit,
    totalProfitPercent,
    assetQuantity,
    isPositive,
    formattedProfit,
    formattedPercent,
  } = usePortfolioStats();

  return {
    handleClosePortfolioModal,
    handleOpenPortfolioModal,
    isOpenModal,
    assetPortfolioItems,
    totalPrice,
    totalProfit,
    totalProfitPercent,
    assetQuantity,
    isPositive,
    formattedProfit,
    formattedPercent,
  };
};
