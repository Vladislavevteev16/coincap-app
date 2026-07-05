import type { Asset } from "@/shared/api/coincap.types";

import { CoinItem, CoinName, CoinPrice } from "./CryptoRate.style";

type CryptoRateProps = Asset & { isLoading?: boolean };

export const CryptoRate: React.FC<CryptoRateProps> = ({
  priceUsd,
  symbol,
  isLoading,
}) => {
  const isNegative = parseFloat(priceUsd) < 0;

  return (
    <CoinItem isLoading={isLoading}>
      <CoinName>{symbol}</CoinName>
      <CoinPrice isNegative={isNegative}>{priceUsd}$</CoinPrice>
    </CoinItem>
  );
};
