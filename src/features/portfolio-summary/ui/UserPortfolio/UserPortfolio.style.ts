import styled from "@emotion/styled";

import { Typography } from "antd";

const { Text } = Typography;

export const UserPortfolioContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
  background: #ffffff;
  border-radius: 12px;
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    border-color: #1890ff;
    box-shadow: 0 4px 16px rgba(24, 144, 255, 0.12);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 8px 14px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    padding: 1.1rem 0.75rem;
    gap: 15px;
    width: 100%;
    justify-content: center;
  }
`;

export const PortfolioIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;

  @media (max-width: 480px) {
    width: 32px;
    height: 32px;
  }
`;

export const PortfolioInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;

  @media (max-width: 480px) {
    gap: 1px;
  }
`;

export const PortfolioLabel = styled(Text)`
  &&& {
    font-size: 12px;
    color: #8c8c8c;
    font-weight: 400;
    line-height: 1.2;

    @media (max-width: 480px) {
      font-size: 10px;
    }
  }
`;

export const PortfolioPrice = styled(Text)`
  &&& {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    letter-spacing: 0.3px;

    @media (max-width: 768px) {
      font-size: 16px;
    }

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }
`;

export const PortfolioPriceUsd = styled(Text)`
  &&& {
    font-size: 13px;
    color: #8c8c8c;
    margin-left: 6px;
    font-weight: 400;

    @media (max-width: 480px) {
      font-size: 11px;
      margin-left: 4px;
    }
  }
`;

export const PortfolioBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px 10px;
  background: #f5222d;
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  border-radius: 12px;
  min-width: 20px;
  height: 20px;
  line-height: 1;
  margin-left: auto;

  @media (max-width: 480px) {
    font-size: 9px;
    padding: 1px 8px;
    height: 16px;
    min-width: 16px;
  }
`;

export const ChangePercent = styled(Text)<{ isPositive: boolean }>`
  &&& {
    font-size: 13px;
    font-weight: 500;
    color: ${({ isPositive }) => (isPositive ? "#52c41a" : "#f5222d")};
    margin-left: 8px;

    @media (max-width: 480px) {
      font-size: 11px;
      margin-left: 4px;
    }
  }
`;
