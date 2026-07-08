import styled from "@emotion/styled";

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 16px;
  margin-bottom: 32px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoLink = styled.a`
  font-size: 14px;
  font-weight: 500;
  color: #1890ff;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #10b981;
    text-decoration: underline;
  }
`;
