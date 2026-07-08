import styled from "@emotion/styled";

import { Button } from "antd";

export const Container = styled.div`
  width: 100%;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  min-height: 400px;

  @media (max-width: 480px) {
    padding: 4px 0;
    min-height: 300px;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
  width: 100%;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const CardWrapper = styled.div`
  width: 100%;

  .crypto-card {
    border-radius: 16px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #f0f0f0;
    width: 100%;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
      border-color: #d9d9d9;
    }

    &:active {
      transform: scale(0.98);
    }

    .ant-card-body {
      padding: 16px 18px;
      width: 100%;

      @media (max-width: 480px) {
        padding: 12px 14px;
      }
    }
  }
`;

export const CardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
  width: 100%;

  @media (max-width: 480px) {
    margin-bottom: 10px;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const RankBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 28px;
  height: 28px;
  background: #f5f5f5;
  border-radius: 50%;
  font-size: 12px;
  font-weight: 700;
  color: #8c8c8c;
  flex-shrink: 0;

  @media (max-width: 480px) {
    min-width: 24px;
    height: 24px;
    font-size: 10px;
  }
`;

export const CryptoInfo = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const CryptoName = styled.div`
  font-weight: 600;
  font-size: 16px;
  color: #1a1a1a;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const CryptoSymbol = styled.div`
  font-size: 12px;
  color: #8c8c8c;
  text-transform: uppercase;

  @media (max-width: 480px) {
    font-size: 10px;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  margin-left: 8px;
`;

export const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
  }
`;

export const Price = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #1a1a1a;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Change = styled.div<{ $isPositive: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  font-weight: 600;
  color: ${({ $isPositive }) => ($isPositive ? "#52c41a" : "#ff4d4f")};

  .anticon {
    font-size: 11px;
  }

  @media (max-width: 480px) {
    font-size: 11px;

    .anticon {
      font-size: 9px;
    }
  }
`;

export const ExtraInfo = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 14px;

  @media (max-width: 480px) {
    padding: 8px 0;
    margin-bottom: 10px;
  }
`;

export const ExtraItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
  }
`;

export const ExtraLabel = styled.span`
  font-size: 11px;
  color: #8c8c8c;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 9px;
    letter-spacing: 0.3px;
  }
`;

export const ExtraValue = styled.strong`
  font-size: 14px;
  color: #1a1a1a;
  font-weight: 600;

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const AddButton = styled(Button)`
  font-weight: 600;
  border-radius: 10px;
  height: 40px;
  font-size: 14px;
  background: #10b981;
  border: none;
  box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(24, 144, 255, 0.4);
    background: linear-gradient(135deg, #40a9ff 0%, #1890ff 100%);
  }

  .anticon {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    height: 26px;
    font-size: 12px;
    border-radius: 8px;

    .anticon {
      font-size: 12px;
    }
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0 8px;
  margin-top: 16px;
  flex-shrink: 0;

  .ant-pagination {
    .ant-pagination-item {
      border-radius: 8px;

      a {
        font-weight: 500;
      }
    }

    .ant-pagination-item-active {
      background: #1890ff;
      border-color: #1890ff;

      a {
        color: #ffffff;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 12px 0 4px;
    margin-top: 12px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 0;
  width: 100%;

  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const SkeletonCard = styled.div`
  background: #ffffff;
  border-radius: 16px;
  padding: 16px 18px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  width: 100%;

  @media (max-width: 480px) {
    padding: 12px 14px;
  }
`;

export const SkeletonContent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 10px;
  }
`;

export const SkeletonAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #f0f0f0;
  flex-shrink: 0;
  animation: pulse 1.5s ease-in-out infinite;

  @media (max-width: 480px) {
    width: 36px;
    height: 36px;
  }
`;

export const SkeletonText = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const SkeletonLine = styled.div`
  height: 14px;
  background: #f0f0f0;
  border-radius: 4px;
  animation: pulse 1.5s ease-in-out infinite;

  @media (max-width: 480px) {
    height: 12px;
  }
`;

export const SkeletonLineShort = styled(SkeletonLine)`
  width: 60%;
`;

export const SkeletonLineMedium = styled(SkeletonLine)`
  width: 40%;
  margin-top: 4px;
`;

export const SkeletonLineFooterLeft = styled(SkeletonLine)`
  width: 40%;
`;

export const SkeletonLineFooterRight = styled(SkeletonLine)`
  width: 30%;
`;

export const SkeletonFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;

  @media (max-width: 480px) {
    padding-top: 8px;
  }
`;

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 20px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  border: 1px solid #f0f0f0;
  width: 100%;

  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

export const EmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 36px;
    margin-bottom: 12px;
  }
`;

export const EmptyText = styled.div`
  font-size: 16px;
  color: #8c8c8c;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const pulse = styled.div`
  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
