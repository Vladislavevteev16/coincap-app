import { useModal } from "@/shared/lib/hooks/useModal";

import { usePortfolioStats } from "./usePortfolioStats";

import { usePortfolioPriceUpdate } from "./usePortfolioPriceUpdate";

export const useUserPortfolio = () => {
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  usePortfolioPriceUpdate();

  const {
    assetPortfolioItems,
    totalPrice,
    totalProfit,
    totalProfitPercent,
    isPositive,
    formattedProfit,
    formattedPercent,
  } = usePortfolioStats();

  return {
    handleCloseModal,
    handleOpenModal,
    isOpen,
    assetPortfolioItems,
    totalPrice,
    totalProfit,
    totalProfitPercent,
    isPositive,
    formattedProfit,
    formattedPercent,
  };
};
