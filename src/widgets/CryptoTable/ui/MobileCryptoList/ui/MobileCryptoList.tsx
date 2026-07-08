import React, { useRef } from "react";

import { useNavigate } from "react-router-dom";

import { Card, Pagination } from "antd";

import {
  PlusOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

import { useMobilePagination } from "../lib/hooks/useMobilePagination";

import type { Asset } from "@/shared/api/coincap.types";

import * as Styled from "./MobileCryptoList.styles";

type MobileCryptoListProps = {
  data: Asset[];
  isLoading?: boolean;
  onAddToPortfolio: (record: Asset) => void;
};

export const MobileCryptoList: React.FC<MobileCryptoListProps> = ({
  data,
  isLoading,
  onAddToPortfolio,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const { currentData, page, total, goToPage } = useMobilePagination(data);

  const handlePageChange = (newPage: number) => {
    goToPage(newPage);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleAddToPortfolio = (
    e: React.MouseEvent<HTMLElement>,
    item: Asset,
  ) => {
    e.stopPropagation();
    onAddToPortfolio(item);
  };

  const handleNavigateMobile = (asset: Asset) =>
    navigate(`/assets/${asset.id}`);

  if (isLoading) {
    return (
      <Styled.LoadingContainer>
        {Array.from({ length: 5 }).map((_, i) => (
          <Styled.SkeletonCard key={i}>
            <Styled.SkeletonContent>
              <Styled.SkeletonAvatar />
              <Styled.SkeletonText>
                <Styled.SkeletonLineShort />
                <Styled.SkeletonLineMedium />
              </Styled.SkeletonText>
            </Styled.SkeletonContent>
            <Styled.SkeletonFooter>
              <Styled.SkeletonLineFooterLeft />
              <Styled.SkeletonLineFooterRight />
            </Styled.SkeletonFooter>
          </Styled.SkeletonCard>
        ))}
      </Styled.LoadingContainer>
    );
  }

  if (!data || data.length === 0) {
    return (
      <Styled.EmptyContainer>
        <Styled.EmptyText>Нет данных для отображения</Styled.EmptyText>
      </Styled.EmptyContainer>
    );
  }

  return (
    <Styled.Container ref={containerRef}>
      <Styled.List>
        {currentData.map((item) => {
          const price = parseFloat(item.priceUsd);
          const change = parseFloat(item.changePercent24Hr);
          const isPositive = change >= 0;
          const marketCap = parseFloat(item.marketCapUsd);
          const volume = parseFloat(item.volumeUsd24Hr);

          return (
            <Styled.CardWrapper key={item.id}>
              <Card
                onClick={() => handleNavigateMobile(item)}
                className="crypto-card"
                hoverable
              >
                <Styled.CardContent>
                  <Styled.LeftSection>
                    <Styled.RankBadge>{item.rank}</Styled.RankBadge>
                    <Styled.CryptoInfo>
                      <Styled.CryptoName>{item.name}</Styled.CryptoName>
                      <Styled.CryptoSymbol>{item.symbol}</Styled.CryptoSymbol>
                    </Styled.CryptoInfo>
                  </Styled.LeftSection>

                  <Styled.RightSection>
                    <Styled.PriceInfo>
                      <Styled.Price>${price.toFixed(2)}</Styled.Price>
                      <Styled.Change $isPositive={isPositive}>
                        {isPositive ? (
                          <ArrowUpOutlined />
                        ) : (
                          <ArrowDownOutlined />
                        )}
                        {Math.abs(change).toFixed(2)}%
                      </Styled.Change>
                    </Styled.PriceInfo>
                  </Styled.RightSection>
                </Styled.CardContent>

                <Styled.ExtraInfo>
                  <Styled.ExtraItem>
                    <Styled.ExtraLabel>
                      Рыночная капитализация
                    </Styled.ExtraLabel>
                    <Styled.ExtraValue>
                      ${marketCap.toFixed(2)}
                    </Styled.ExtraValue>
                  </Styled.ExtraItem>
                  <Styled.ExtraItem>
                    <Styled.ExtraLabel>Объем (24ч)</Styled.ExtraLabel>
                    <Styled.ExtraValue>${volume.toFixed(2)}</Styled.ExtraValue>
                  </Styled.ExtraItem>
                </Styled.ExtraInfo>

                <Styled.AddButton
                  type="primary"
                  size="small"
                  icon={<PlusOutlined />}
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    handleAddToPortfolio(e, item)
                  }
                  block
                >
                  Добавить
                </Styled.AddButton>
              </Card>
            </Styled.CardWrapper>
          );
        })}
      </Styled.List>

      <Styled.PaginationWrapper>
        <Pagination
          current={page}
          total={total}
          pageSize={5}
          onChange={handlePageChange}
          showSizeChanger={false}
          size="small"
        />
      </Styled.PaginationWrapper>
    </Styled.Container>
  );
};
