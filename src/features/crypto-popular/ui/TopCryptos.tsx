import { CryptoRate } from "./CryptoRate";

import { useTopAssets } from "../model/useTopAssets";

import {
  PopularCoinsWrapper,
  PopularCoinsHeader,
  CoinList,
} from "./TopCryptos.style";

export const TopCryptos: React.FC = () => {
  const { data, isLoading, isError } = useTopAssets();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Ошибка</h1>;
  }

  return (
    <PopularCoinsWrapper>
      <PopularCoinsHeader>Популярные криптовалюты:</PopularCoinsHeader>
      <CoinList>
        {data && data.map((item) => <CryptoRate key={item.id} {...item} />)}
      </CoinList>
    </PopularCoinsWrapper>
  );
};
