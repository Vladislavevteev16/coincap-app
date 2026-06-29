import { PortfolioIcon } from "../PorfolioIcon";

import * as Styled from "./UserPortfolio.style";

export const UserPortfolio = () => {
  return (
    <Styled.UserPortfolioContainer>
      <Styled.PortfolioIconWrapper>
        <PortfolioIcon />
      </Styled.PortfolioIconWrapper>
      <Styled.PortfolioInfo>
        <Styled.PortfolioLabel>Portfolio</Styled.PortfolioLabel>
        <Styled.PortfolioPrice>
          $12,456.78
          <Styled.PortfolioPriceUsd>USD</Styled.PortfolioPriceUsd>
          <Styled.ChangePercent isPositive={true}>+2.4%</Styled.ChangePercent>
        </Styled.PortfolioPrice>
      </Styled.PortfolioInfo>
      <Styled.PortfolioBadge>3</Styled.PortfolioBadge>
    </Styled.UserPortfolioContainer>
  );
};
