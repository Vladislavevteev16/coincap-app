import { CloseOutlined } from "@ant-design/icons";

import styled from "@emotion/styled";

import { InputNumber, Button, Typography } from "antd";

const { Title, Text } = Typography;

export const PortfolioModalContainer = styled.div`
  width: 480px;
  padding: 32px 40px 32px;
  background: #ffffff;
  border-radius: 16px;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);

  @media (max-width: 480px) {
    width: 75vw;
  }
`;

export const CloseButton = styled(CloseOutlined)`
  position: absolute;
  top: 16px;
  right: 16px;
  font-size: 18px;
  color: #8c8c8c;
  cursor: pointer;
  padding: 4px;
  transition: all 0.2s;
  border-radius: 4px;

  &:hover {
    background-color: #f5f5f5;
    color: #262626;
  }
`;

export const ModalTitle = styled(Title)`
  &&& {
    font-size: 24px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 4px 0;
  }
`;

export const AssetSymbol = styled(Text)`
  &&& {
    font-size: 14px;
    color: #8c8c8c;
    display: block;
    margin-bottom: 24px;
    text-transform: uppercase;
  }
`;

export const PriceInfo = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px 0;
  border-top: 1px solid #f0f0f0;
  border-bottom: 1px solid #f0f0f0;
  margin-bottom: 24px;

  @media (max-width: 480px) {
    margin-bottom: 5px;
  }
`;

export const PriceItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const PriceLabel = styled(Text)`
  &&& {
    font-size: 12px;
    color: #8c8c8c;
  }
`;

export const PriceValue = styled(Text)`
  &&& {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
  }
`;

export const InputLabel = styled(Text)`
  &&& {
    display: block;
    font-size: 14px;
    color: #595959;
    margin-bottom: 8px;
    font-weight: 500;
  }
`;

export const StyledInputNumber = styled(InputNumber)`
  &&& {
    width: 100%;
    border-radius: 8px;
    border: 1px solid #d9d9d9;
    margin-bottom: 16px;

    .ant-input-number-input {
      font-size: 16px;
      padding: 12px 14px;
      height: 48px;
    }

    &:hover {
      border-color: #1890ff;
    }

    &:focus-within {
      border-color: #1890ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
`;

export const TotalPriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background: linear-gradient(135deg, #f0f7ff 0%, #e6f0fa 100%);
  border-radius: 12px;
  margin-bottom: 24px;
  border: 1px solid #d6e4f0;
`;

export const TotalPriceLabel = styled(Text)`
  &&& {
    font-size: 16px;
    font-weight: 500;
    color: #1a1a1a;

    @media (max-width: 480px) {
      font-size: 15px;
    }
  }
`;

export const TotalPriceValue = styled(Text)`
  &&& {
    font-size: 22px;
    font-weight: 700;
    color: #10b981;
    letter-spacing: 0.5px;

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }
`;

export const TotalPriceUsd = styled(Text)`
  &&& {
    font-size: 14px;
    color: #8c8c8c;
    margin-left: 4px;
    font-weight: 400;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledButton = styled(Button)`
  &&& {
    flex: 1;
    height: 48px;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    transition: all 0.3s;
  }
`;

export const CancelButton = styled(StyledButton)`
  &&& {
    background: #f5f5f5;
    border: none;
    color: #595959;

    &:hover {
      background: #e8e8e8 !important;
      color: #262626 !important;
      border: none;
    }
  }
`;

export const AddButton = styled(StyledButton)`
  &&& {
    background: #10b981;
    border: none;
    color: #ffffff;

    &:hover {
      background: #0b845b !important;
      color: #ffffff !important;
    }
  }
`;
