import { Typography } from "antd";

import { formatCurrency } from "@/shared/lib/heplers/format";

import { tooltipStyles } from "./CustomTooltip.styles";

const { Text } = Typography;

type PayloadType = {
  value: number;
  name: string;
  dataKey: string;
  color?: string;
};

type CustomTooltipProps = {
  active?: boolean;
  payload?: PayloadType[];
  label?: string;
};

export const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length && label) {
    return (
      <div style={tooltipStyles.container}>
        <Text style={tooltipStyles.label}>
          {new Date(label).toLocaleDateString("ru-RU")}
        </Text>
        <Text style={tooltipStyles.value}>
          {formatCurrency(payload[0].value)}
        </Text>
      </div>
    );
  }
  return null;
};
