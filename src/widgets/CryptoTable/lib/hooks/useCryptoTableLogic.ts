import { useAppDispatch } from "@/app/store";

import { usePagination } from "./usePagination";

import { useModal } from "@/shared/api/lib/hooks/useModal";

import { useCryptoTable } from "./useCryptoTable";

import { setSelectedAsset } from "@/entities/portfolio/model/portfolio.slice";

import type { Asset } from "@/shared/api/coincap.types";

const PAGE_SIZE = 10;

export const useCryptoTableLogic = () => {
  const dispatch = useAppDispatch();

  const { page, setPage } = usePagination();

  const { isOpen, open, close } = useModal();

  const { data, isLoading, isError } = useCryptoTable(page);

  const handleOpenModal = (asset: Asset) => {
    dispatch(setSelectedAsset(asset));
    open();
  };

  return {
    data,
    isLoading,
    isError,
    page,
    setPage,
    isOpenModal: isOpen,
    handleOpenModal,
    handleCloseModal: close,
    offset: (page - 1) * PAGE_SIZE,
  };
};
