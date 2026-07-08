import React, { useState } from "react";


import { useAppDispatch } from "@/app/store";

import { addAsset } from "@/entities/portfolio/model";

import type { Asset } from "@/shared/api/coincap.types";

import * as Style from "./AssetPurchaseControls.styles";

type AssetPurchaseControlsProps = {
  asset: Asset;
};

const TIMER_DELAY = 500;

export const AssetPurchaseControls: React.FC<AssetPurchaseControlsProps> = ({
  asset,
}) => {
  const [quantity, setQuantity] = useState<number | null>(1);
  const [isBuying, setIsBuying] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  const handleBuy = () => {
    if (!asset || !quantity || quantity <= 0) {
      return;
    }

    setIsBuying(true);

    dispatch(
      addAsset({
        id: asset.id,
        name: asset.name,
        priceUsd: asset.priceUsd,
        qty: quantity,
      }),
    );
    setTimeout(() => setIsBuying(false), TIMER_DELAY);
  };

  return (
    <Style.Controls>
      <Style.InputGroup>
        <label>Введите количество:</label>
        <Style.StyledInputNumber
          min={0.01}
          step={0.01}
          value={quantity}
          onChange={(value) => setQuantity(value as number | null)}
          placeholder="0.00"
        />
        <Style.Symbol>{asset.symbol}</Style.Symbol>
      </Style.InputGroup>
      <Style.BuyButton
        type="primary"
        onClick={handleBuy}
        disabled={isBuying || !quantity || quantity <= 0}
      >
        {isBuying ? "Добавлено" : "Купить"}
      </Style.BuyButton>
    </Style.Controls>
  );
};
