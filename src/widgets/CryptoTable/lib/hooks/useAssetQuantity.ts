import { useMemo, useState } from "react";

import { useCurrentAsset } from "../../model/portfolio.modal.selectors";

type ValueType = string | number;

export const useAssetQuantity = () => {
  const currentAsset = useCurrentAsset();
  const [quantity, setQuantity] = useState<number>(1);

  const totalPrice = useMemo(() => {
    if (!currentAsset) return 0;
    return quantity * Number(currentAsset.priceUsd || 0);
  }, [quantity, currentAsset]);

  const handleChangeTotalPrice = (value: ValueType | null) => {
    if (typeof value === "number") setQuantity(value);
  };

  return {
    quantity,
    currentAsset,
    totalPrice,
    handleChangeTotalPrice,
  };
};
