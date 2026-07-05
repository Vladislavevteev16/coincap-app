import React from "react";

import * as Style from './AssetInfoCard.styles'

type AssetInfoCardProps = {
  label: string;
  value: React.ReactNode;
  valueStyle?: React.CSSProperties;
};

export const AssetInfoCard: React.FC<AssetInfoCardProps> = ({
  label,
  value,
  valueStyle,
}) => {
  return (
    <Style.InfoCard>
      <Style.InfoLabel>{label}</Style.InfoLabel>
      <Style.InfoValue style={valueStyle}>{value}</Style.InfoValue>
    </Style.InfoCard>
  );
};
