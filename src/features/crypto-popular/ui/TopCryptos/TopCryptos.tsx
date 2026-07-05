import { Alert } from "antd";

import { CryptoRate } from "../CryptoRate";

import { LIMIT } from "../../model/useTopAssets";

import { useTopAssets } from "../../model/useTopAssets";

import * as Style from "./TopCryptos.style";

const TopCryptosWrapper: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Style.PopularCoinsWrapper>
      <Style.PopularCoinsHeader>
        Популярные криптовалюты:
      </Style.PopularCoinsHeader>
      {children}
    </Style.PopularCoinsWrapper>
  );
};

export const TopCryptos: React.FC = () => {
  const { data = [], isLoading, isError } = useTopAssets();

  if (isLoading) {
    return (
      <TopCryptosWrapper>
        <Style.CoinList>
          {Array.from({ length: LIMIT }).map((_, i) => (
            <Style.SkeletonItem key={i}>
              <Style.SkeletonPulse />
            </Style.SkeletonItem>
          ))}
        </Style.CoinList>
      </TopCryptosWrapper>
    );
  }

  if (isError) {
    return (
      <TopCryptosWrapper>
        <Style.ErrorContainer>
          <Alert
            title="Ошибка загрузки"
            type="error"
            showIcon
            closable={false}
          />
        </Style.ErrorContainer>
      </TopCryptosWrapper>
    );
  }

  return (
    <TopCryptosWrapper>
      <Style.CoinList>
        {data && data.map((item) => <CryptoRate key={item.id} {...item} />)}
      </Style.CoinList>
    </TopCryptosWrapper>
  );
};
