import styled from "@emotion/styled";

import { Typography } from "antd";

const { Text } = Typography;

export const CoinItem = styled.li<{ isLoading?: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 0.8rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.2s ease;
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: #e9ecef;
  }

  ${({ isLoading }) =>
    isLoading &&
    `
      opacity: 0.6;
      pointer-events: none;

      & > * {
        filter: blur(2px);
      }
    `}

  @media (max-width: 768px) {
    padding: 0.3rem 0.6rem;
    gap: 0.3rem;
  }
`;

export const CoinName = styled(Text)`
  &&& {
    font-weight: 600;
    font-size: 0.9rem;
    color: #212529;
    margin: 0;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 0.8rem;
    }
  }
`;

export const CoinPrice = styled(Text)<{ isNegative?: boolean }>`
  &&& {
    font-size: 0.85rem;
    font-weight: 500;
    color: ${({ isNegative }) => (isNegative ? "#dc3545" : "#28a745")};
    margin: 0;
    line-height: 1.2;

    @media (max-width: 768px) {
      font-size: 0.75rem;
    }
  }
`;