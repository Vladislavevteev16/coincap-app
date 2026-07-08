import { useUserPortfolio } from "../../lib/hooks/useUserPortfolio";

import { PortfolioIcon } from "../PorfolioIcon";

import { PortfolioModal } from "../PortfolioModal";

import * as Styled from "./UserPortfolio.style";

export const UserPortfolio = () => {
  const {
    assetPortfolioItems,
    handleCloseModal,
    handleOpenModal,
    isOpen,
    totalPrice,
    formattedPercent,
    formattedProfit,
    isPositive,
    handleDeleteAsset,
  } = useUserPortfolio();

  return (
    <>
      <Styled.UserPortfolioContainer onClick={handleOpenModal}>
        <Styled.PortfolioIconWrapper>
          <PortfolioIcon />
        </Styled.PortfolioIconWrapper>
        <Styled.PortfolioInfo>
          <Styled.PortfolioLabel>Портфель</Styled.PortfolioLabel>
          <Styled.PortfolioPrice>
            ${totalPrice.toFixed(2)}
            <Styled.PortfolioPriceUsd>USD</Styled.PortfolioPriceUsd>
            <Styled.ChangePercent isPositive={isPositive}>
              {isPositive ? "+" : "-"}
              {formattedProfit} ({formattedPercent}%)
            </Styled.ChangePercent>
          </Styled.PortfolioPrice>
        </Styled.PortfolioInfo>
      </Styled.UserPortfolioContainer>
      <PortfolioModal
        totalPortfolioValue={totalPrice}
        assetList={assetPortfolioItems}
        isOpen={isOpen}
        handleCloseModal={handleCloseModal}
        handleDeleteAsset={handleDeleteAsset}
      />
    </>
  );
};
