import { useUserPortfolio } from "../../lib/hooks/useUserPortfolio";

import { PortfolioIcon } from "../PorfolioIcon";

import { PortfolioModal } from "../PortfolioModal";

import * as Styled from "./UserPortfolio.style";

export const UserPortfolio = () => {
  const {
    assetPortfolioItems,
    assetQuantity,
    handleClosePortfolioModal,
    handleOpenPortfolioModal,
    isOpenModal,
    totalPrice,
    formattedPercent,
    formattedProfit,
    isPositive,
  } = useUserPortfolio();

  return (
    <>
      <Styled.UserPortfolioContainer onClick={handleOpenPortfolioModal}>
        <Styled.PortfolioIconWrapper>
          <PortfolioIcon />
        </Styled.PortfolioIconWrapper>
        <Styled.PortfolioInfo>
          <Styled.PortfolioLabel>Portfolio</Styled.PortfolioLabel>
          <Styled.PortfolioPrice>
            ${totalPrice.toFixed(2)}
            <Styled.PortfolioPriceUsd>USD</Styled.PortfolioPriceUsd>
            <Styled.ChangePercent isPositive={isPositive}>
              {isPositive ? "+" : "-"}
              {formattedProfit} ({formattedPercent}%)
            </Styled.ChangePercent>
          </Styled.PortfolioPrice>
        </Styled.PortfolioInfo>
        <Styled.PortfolioBadge>{assetQuantity}</Styled.PortfolioBadge>
      </Styled.UserPortfolioContainer>
      <PortfolioModal
        totalPortfolioValue={totalPrice}
        assetList={assetPortfolioItems}
        isOpen={isOpenModal}
        handleCloseModal={handleClosePortfolioModal}
      />
    </>
  );
};
