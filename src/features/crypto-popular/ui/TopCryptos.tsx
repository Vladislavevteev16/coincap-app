import { CryptoRate } from "./CryptoRate";

import { useTopAssets } from "../model/useTopAssets";

import s from "./TopCryptos.module.css";

export const TopCryptos: React.FC = () => {
  const { data, isLoading, isError } = useTopAssets();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (isError) {
    return <h1>Ошибка</h1>;
  }

  return (
    <div className={s.popularCoinsWrapper}>
      <h2 className={s.popularCoinsHeader}>Популярные криптовалюты:</h2>
      <ul className={s.coinList}>
        {data && data.map((item) => <CryptoRate key={item.id} {...item} />)}
      </ul>
    </div>
  );
};
