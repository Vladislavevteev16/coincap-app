import styled from "@emotion/styled";

import { Button, InputNumber, Typography } from "antd";

const { Text } = Typography;

export const Controls = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
  background: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  margin-bottom: 32px;
  flex-wrap: wrap;
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 0;

  label {
    font-size: 14px;
    color: #595959;
    font-weight: 500;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const StyledInputNumber = styled(InputNumber)`
  &&& {
    width: 140px;
    max-width: 100%;
    border-radius: 8px;
    border: 1px solid #d9d9d9;

    .ant-input-number-input {
      font-size: 16px;
      padding: 8px 12px;
      height: 40px;
    }

    &:hover {
      border-color: #10b981;
    }

    &:focus-within {
      border-color: #10b981;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const BuyButton = styled(Button)`
  &&& {
    height: 40px;
    padding: 0 32px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    background: #10b981;
    border: none;
    color: #ffffff;
    transition: all 0.3s;

    &:hover:not(:disabled) {
      color: #ffffff !important;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(24, 144, 255, 0.3);
    }

    &:disabled {
      background: #f5f5f5;
      color: #bfbfbf;
      cursor: not-allowed;
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

export const Symbol = styled(Text)`
  color: "#8c8c8c";
  font-size: 14px;
`;
