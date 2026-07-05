import React from "react";

import { ArrowLeftOutlined } from "@ant-design/icons";

import { useAssetDetails } from "@/pages/asset-details/lib/hooks/useAssetDetails";

import { AssetInfoGrid } from "@/features/asset/ui/AssetInfoGrid";
import { AssetPriceChart } from "@/features/asset/ui/AssetPriceChart";
import { AssetPurchaseControls } from "@/features/asset/ui/AssetPurchaseControls";

import { formatCurrency } from "@/shared/lib/heplers/format";

import * as Style from "./AssetDetails.styles";

export const AssetDetails: React.FC = () => {
  const { asset, history, isLoading, hasError, handleBack, handleReload } =
    useAssetDetails();

  if (hasError) {
    return (
      <Style.PageContainer>
        <Style.BackButton icon={<ArrowLeftOutlined />} onClick={handleBack}>
          Назад
        </Style.BackButton>
        <Style.ErrorContainer>
          <Style.ErrorTitle>Ошибка загрузки данных</Style.ErrorTitle>
          <Style.ErrorDescription>
            Попробуйте обновить страницу
          </Style.ErrorDescription>
          <Style.BackButton onClick={handleReload}>Обновить</Style.BackButton>
        </Style.ErrorContainer>
      </Style.PageContainer>
    );
  }

  if (isLoading || !asset) {
    return (
      <Style.PageContainer>
        <Style.BackButton icon={<ArrowLeftOutlined />} onClick={handleBack}>
          Назад
        </Style.BackButton>
        <Style.LoadingContainer>
          <Style.LoadingText>Загрузка...</Style.LoadingText>
        </Style.LoadingContainer>
      </Style.PageContainer>
    );
  }

  return (
    <Style.PageContainer>
      <Style.PageHeader>
        <Style.BackButton icon={<ArrowLeftOutlined />} onClick={handleBack}>
          Назад
        </Style.BackButton>
        <Style.CryptoTitle level={1}>
          <span className="symbol">{asset.symbol}</span>
          <span className="name">{asset.name}</span>
        </Style.CryptoTitle>
        <Style.PriceDisplay>
          {formatCurrency(asset.priceUsd)}
        </Style.PriceDisplay>
      </Style.PageHeader>

      <AssetPurchaseControls asset={asset} />
      <AssetInfoGrid asset={asset} />
      <AssetPriceChart history={history} loading={isLoading} />
    </Style.PageContainer>
  );
};
