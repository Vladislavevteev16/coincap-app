import { UserPortfolio } from "@/features/portfolio-summary";

import { TopCryptos } from "@/features/crypto-popular";

import styled from "@emotion/styled";

const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <TopCryptos />
      <UserPortfolio />
    </StyledHeader>
  );
};
