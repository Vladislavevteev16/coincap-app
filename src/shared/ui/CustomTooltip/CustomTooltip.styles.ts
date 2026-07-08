import styled from "@emotion/styled";

import { Typography } from "antd";

const { Text } = Typography;

export const tooltipStyles = {
  container: {
    background: "#ffffff",
    border: "1px solid #f0f0f0",
    padding: "12px 16px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
  },
  label: {
    display: "block",
    fontSize: "14px",
    color: "#8c8c8c",
  },
  value: {
    display: "block",
    fontSize: "18px",
    fontWeight: 600,
    color: "#1a1a1a",
  },
};

export const TooltipContainer = styled.div`
  background: "#ffffff";
  border: "1px solid #f0f0f0";
  padding: "12px 16px";
  border-radius: "8px";
  box-shadow: "0 4px 12px rgba(0, 0, 0, 0.08)";
`;

export const Label = styled(Text)`
  display: "block";
  font-size: "14px";
  color: "#8c8c8c";
`;

export const Value = styled(Text)`
  display: "block";
  font-size: "18px";
  font-weight: 600;
  color: "#1a1a1a";
`;
