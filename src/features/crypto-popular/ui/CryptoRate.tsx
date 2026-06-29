import type { Asset } from "@/shared/api/coincap.types";
import { CoinItem, CoinName, CoinPrice } from "./CryptoRate.style";

export const CryptoRate: React.FC<Asset & { isLoading?: boolean }> = ({
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
