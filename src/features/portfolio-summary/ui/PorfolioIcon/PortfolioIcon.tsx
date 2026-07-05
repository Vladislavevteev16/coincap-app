import styled from "@emotion/styled";

import icon from "./assets/portfolio-icon.svg";

const StyledImg = styled.img`
  width: 3rem;

  @media (max-width: 480px) {
    width: 2rem;
  }
`;

export const PortfolioIcon = () => {
  return <StyledImg src={icon} alt="porfolio" />;
};
