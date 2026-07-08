import { useParams, useNavigate } from "react-router-dom";

import { message } from "antd";

import {
  useAsset,
  useAssetHistory,
} from "@/features/asset/lib/hooks/useBuyAsset";

import type { Asset } from "@/shared/api/coincap.types";

export const useAssetDetails = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const handleReload = () => window.location.reload();

  const {
    data: assetData,
    isLoading: assetLoading,
    error: assetError,
  } = useAsset(id!);

  const {
    data: historyData,
    isLoading: historyLoading,
    error: historyError,
  } = useAssetHistory(id!);

  const asset = assetData?.data;
  const history = historyData?.data || [];

  const handleBuy = (asset: Asset, amount: number) => {
    message.success(`Добавлено ${amount} ${asset.symbol}`);
  };

  return {
    asset,
    history,
    isLoading: assetLoading || historyLoading,
    hasError: !!(assetError || historyError),
    handleBuy,
    handleBack,
    handleReload,
  };
};
