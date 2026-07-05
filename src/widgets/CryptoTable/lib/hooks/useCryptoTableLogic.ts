import { useNavigate } from "react-router-dom";

import { useAppDispatch } from "@/app/store";

import { useModal } from "@/shared/lib/hooks/useModal";

import { setSelectedAsset } from "@/entities/portfolio/model/portfolio.slice";

import type { Asset } from "@/shared/api/coincap.types";

import { usePagination } from "./usePagination";

import { useCryptoTable } from "./useCryptoTable";

const PAGE_SIZE = 10;

export const useCryptoTableLogic = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { page, setPage } = usePagination();

  const { isOpen, handleCloseModal, handleOpenModal: open } = useModal();

  const { data, isLoading, isError } = useCryptoTable(page);

  const handleOpenModal = (asset: Asset) => {
    dispatch(setSelectedAsset(asset));
    open();
  };

  const handleRowNavigate = (asset: Asset) => ({
    onClick: () => navigate(`/assets/${asset.id}`),
  });

  return {
    data,
    isLoading,
    isError,
    page,
    setPage,
    isOpenModal: isOpen,
    handleOpenModal,
    handleCloseModal,
    handleRowNavigate,
    offset: (page - 1) * PAGE_SIZE,
  };
};
