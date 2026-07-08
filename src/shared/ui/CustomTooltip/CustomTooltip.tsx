import { formatCurrency } from "@/shared/lib/heplers/format";

import * as Style from "./CustomTooltip.styles";

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
      <Style.TooltipContainer>
        <Style.Label>{new Date(label).toLocaleDateString("ru-RU")}</Style.Label>
        <Style.Value>{formatCurrency(payload[0].value)}</Style.Value>
      </Style.TooltipContainer>
    );
  }
  return null;
};
