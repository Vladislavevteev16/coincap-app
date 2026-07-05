import styled from "@emotion/styled";

import { Button, Typography } from "antd";

const { Title, Text } = Typography;

export const PageContainer = styled.div`
  min-height: 100vh;
  background: #ffffff;
  padding: 32px 40px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  overflow-x: hidden;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 16px 12px;
  }

  @media (max-width: 480px) {
    padding: 10px 10px;
  }
`;

export const PageHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    margin-bottom: 16px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const BackButton = styled(Button)`
  &&& {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #595959;
    font-size: 14px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    padding: 8px 16px;
    height: 40px;
    background: #ffffff;
    transition: all 0.2s;

    &:hover {
      color: #1890ff !important;
      border-color: #1890ff !important;
      background: #f0f7ff !important;
    }

    @media (max-width: 480px) {
      font-size: 12px;
      padding: 6px 12px;
      height: 34px;
      gap: 4px;

      span:first-of-type {
        display: none;
      }
    }
  }
`;

export const CryptoTitle = styled(Title)`
  &&& {
    font-size: 28px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;

    .symbol {
      color: #1890ff;
    }

    .name {
      color: #8c8c8c;
      font-weight: 400;
      font-size: 20px;
    }

    @media (max-width: 768px) {
      font-size: 22px;

      .name {
        font-size: 16px;
      }
    }

    @media (max-width: 480px) {
      font-size: 18px;
      gap: 6px;

      .name {
        font-size: 14px;
        display: block;
        width: 100%;
      }
    }
  }
`;

export const PriceDisplay = styled(Text)`
  &&& {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a1a;
    margin-left: auto;
    letter-spacing: 0.5px;

    @media (max-width: 768px) {
      font-size: 24px;
      margin-left: 0;
      width: 100%;
    }

    @media (max-width: 480px) {
      font-size: 20px;
      margin-left: 0;
      width: 100%;
      text-align: left;
    }
  }
`;

export const ErrorContainer = styled.div`
  text-align: center;
  margin-top: 40px;
  padding: 0 16px;

  @media (max-width: 480px) {
    margin-top: 24px;
  }
`;

export const ErrorTitle = styled(Text)`
  font-size: 24px;
  color: #ff4d4f;
  display: block;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

export const ErrorDescription = styled(Text)`
  color: #8c8c8c;
  display: block;
  margin-bottom: 16px;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;

  @media (max-width: 480px) {
    height: 300px;
  }
`;

export const LoadingText = styled(Text)`
  font-size: 18px;
  color: #8c8c8c;

  @media (max-width: 480px) {
    font-size: 15px;
  }
`;
