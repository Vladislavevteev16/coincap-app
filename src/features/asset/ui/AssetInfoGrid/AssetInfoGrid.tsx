import React from "react";

import {
  formatCurrency,
  formatLargeNumber,
  getDomain,
} from "@/shared/lib/heplers/format";

import type { Asset } from "@/shared/api/coincap.types";

import { AssetInfoCard } from "../AssetInfoCard";

import * as Style from "./AssetInfoGrid.styles";

type AssetInfoGrid = {
  asset: Asset;
};

export const AssetInfoGrid: React.FC<AssetInfoGrid> = ({ asset }) => {
  return (
    <Style.InfoGrid>
      <AssetInfoCard label="Цена" value={formatCurrency(asset.priceUsd)} />
      <AssetInfoCard
        label="Доступное предложение для торговли"
        value={`${formatLargeNumber(asset.supply)} ${asset.symbol}`}
      />
      <AssetInfoCard
        label="Общее кол-во выпущенных активов"
        value={`${asset.maxSupply ? formatLargeNumber(asset.maxSupply) : "Не ограничено"} ${asset.symbol}`}
      />
      <AssetInfoCard
        label="Объем торгов за последние 24 часа"
        value={formatCurrency(asset.volumeUsd24Hr)}
      />
      <AssetInfoCard
        label="Средняя цена по объему за последние 24 часа"
        value={formatCurrency(asset.vwap24Hr)}
      />
      <AssetInfoCard
        label="Процентное изменение цены за последние 24 часа"
        value={`${parseFloat(asset.changePercent24Hr).toFixed(2)}%`}
        valueStyle={{
          color:
            parseFloat(asset.changePercent24Hr) >= 0 ? "#52c41a" : "#ff4d4f",
        }}
      />
      {asset.explorer && (
        <AssetInfoCard
          label="Сайт"
          value={
            <Style.InfoLink
              href={asset.explorer}
              target="_blank"
              rel="noopener noreferrer"
            >
              {getDomain(asset.explorer)}
            </Style.InfoLink>
          }
        />
      )}
    </Style.InfoGrid>
  );
};
