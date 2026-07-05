import React from "react";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { CustomTooltip } from "@/shared/ui/CustomTooltip";

import type {
  AssetHistoryItem,
  ChartDataPoint,
} from "@/shared/api/coincap.types";

import * as Style from "./AssetPriceChart.styles";

type AssetPriceChartProps = {
  history: AssetHistoryItem[];
  loading: boolean;
};

export const AssetPriceChart: React.FC<AssetPriceChartProps> = ({
  history,
  loading,
}) => {
  const chartData = history.map(
    (item: AssetHistoryItem): ChartDataPoint => ({
      date: new Date(item.time).toISOString().split("T")[0],
      price: parseFloat(item.priceUsd),
    }),
  );

  return (
    <Style.ChartContainer>
      <Style.ChartTitle>Динамика цены за 30 дней</Style.ChartTitle>
      {loading || chartData.length === 0 ? (
        <Style.LoadingContainer>
          {loading ? "Загрузка графика" : "Нет данных для графика"}
        </Style.LoadingContainer>
      ) : (
        <ResponsiveContainer width="100%" height="85%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              stroke="#bfbfbf"
              fontSize={12}
              tickLine={false}
              tickFormatter={(value) =>
                `${new Date(value).getDate()}.${new Date().getMonth() + 1}`
              }
            />
            <YAxis
              stroke="#bfbfbf"
              fontSize={12}
              tickLine={false}
              domain={["auto", "auto"]}
              tickFormatter={(value) => `$${value.toFixed(0)}`}
              width={60}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#1890ff"
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 6, fill: "#1890ff" }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </Style.ChartContainer>
  );
};
