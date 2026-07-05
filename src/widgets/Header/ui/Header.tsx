import { UserPortfolio } from "@/features/portfolio-summary";

import { TopCryptos } from "@/features/crypto-popular";

import styled from "@emotion/styled";

const StyledHeader = styled.header`
  width: 100%;
  padding: 0.75rem 2rem;
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  background: #ffffff;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    gap: 1rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Header = () => {
  return (
    <StyledHeader>
      <TopCryptos />
      <UserPortfolio />
    </StyledHeader>
  );
};
