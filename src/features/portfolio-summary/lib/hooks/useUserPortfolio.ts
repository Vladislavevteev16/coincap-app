import { useModal } from "@/shared/lib/hooks/useModal";

import { useAppDispatch } from "@/app/store";

import { removeAsset } from "@/entities/portfolio/model";

import type { Asset } from "@/shared/api/coincap.types";

import { usePortfolioStats } from "./usePortfolioStats";

import { usePortfolioPriceUpdate } from "./usePortfolioPriceUpdate";

export const useUserPortfolio = () => {
  const dispatch = useAppDispatch();
  
  const { isOpen, handleCloseModal, handleOpenModal } = useModal();

  const handleDeleteAsset = (id: Asset["id"]) => dispatch(removeAsset(id));

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
    handleDeleteAsset,
  };
};
