import styled from "@emotion/styled";

import icon from "./assets/portfolio-icon.svg";

const StyledImg = styled.img`
  width: 3rem;
`;

export const PortfolioIcon = () => {
  return <StyledImg src={icon} alt="porfolio" />;
};
