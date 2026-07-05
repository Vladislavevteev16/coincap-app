import styled from "@emotion/styled";

import { Card, Typography } from "antd";

const { Text } = Typography;

export const InfoCard = styled(Card)`
  &&& {
    border-radius: 12px;
    border: 1px solid #f0f0f0;
    background: #fafafa;

    .ant-card-body {
      padding: 16px 20px;
    }

    &:hover {
      border-color: #d9d9d9;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    }
  }
`;

export const InfoLabel = styled(Text)`
  &&& {
    font-size: 12px;
    color: #8c8c8c;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: block;
    margin-bottom: 8px;
  }
`;

export const InfoValue = styled(Text)`
  &&& {
    font-size: 18px;
    font-weight: 500;
    color: #1a1a1a;
    display: block;
  }
`;
