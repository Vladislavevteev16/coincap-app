import type { Asset } from "@/shared/api/coincap.types";

import s from "./CryptoRate.module.css";

export const CryptoRate: React.FC<Asset> = ({ priceUsd, symbol }) => {

  return (
    <li className={s.coinItem}>
      <span className={s.coinName}>{symbol}</span>
      <span className={s.coinPrice}>{priceUsd}$</span>
    </li>
  );
};
