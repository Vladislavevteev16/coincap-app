import { useAppDispatch, useAppSelector } from "@/app/store";

import {
  modalPortfolioClosed,
  modalPortfolioOpened,
  selectIsOpenPortfolioModal,
} from "@/entities/portfolio/model/portfolio.slice";

import { usePortfolioStats } from "./usePortfolioStats";

import { usePortfolioPriceUpdate } from "./usePortfolioPriceUpdate";

export const useUserPortfolio = () => {
  const dispatch = useAppDispatch();

  usePortfolioPriceUpdate();

  const handleOpenPortfolioModal = () => dispatch(modalPortfolioOpened());
  const handleClosePortfolioModal = () => dispatch(modalPortfolioClosed());

  const isOpenModal = useAppSelector(selectIsOpenPortfolioModal);

 
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
