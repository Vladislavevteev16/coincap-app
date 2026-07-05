import styled from "@emotion/styled";

import { Typography } from "antd";

const { Text } = Typography;

export const ChartContainer = styled.div`
  background: #fafafa;
  border: 1px solid #f0f0f0;
  border-radius: 12px;
  padding: 20px;
  height: 420px;

  @media (max-width: 768px) {
    height: 320px;
    padding: 12px;
  }
`;

export const ChartTitle = styled(Text)`
  &&& {
    font-size: 14px;
    color: #8c8c8c;
    display: block;
    margin-bottom: 16px;
    font-weight: 500;
  }
`;

export const LoadingContainer = styled.div`
  display: "flex";
  align-items: "center";
  justify-content: "center";
  height: "80%";
  color: "#bfbfbf";
`;
