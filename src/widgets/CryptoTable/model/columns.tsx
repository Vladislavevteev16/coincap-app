import type { ColumnsType } from "antd/es/table";

import { PlusOutlined } from "@ant-design/icons";

import type { Asset } from "@/shared/api/coincap.types";

import styled from "@emotion/styled";

const StyledPlusIcon = styled(PlusOutlined)`
  cursor: pointer;
  padding: 5px;
  border-radius: 4px;
  transition: all 0.2s;
  font-size: 16px;
  color: #1890ff;

  &:hover {
    background-color: #e9e9ea;
    color: #626568;
  }
`;

export const columns = (
  offset: number = 0,
  handleOpenModal?: (asset: Asset) => void,
): ColumnsType<Asset> => [
  {
    title: "№",
    render: (_, __, index) => index + 1 + offset,
    width: 40,
  },
  {
    title: "Symbol",
    dataIndex: "symbol",
    width: 100,
  },
  {
    title: "Name",
    dataIndex: "name",
    width: 300,
  },
  {
    title: "VWAP (24Hr)",
    dataIndex: "vwap24Hr",
    width: 150,
    render: (value) => Number(value).toFixed(2),
  },
  {
    title: "Change (24Hr)",
    dataIndex: "changePercent24Hr",
    width: 150,
    render: (value) => `${Number(value).toFixed(2)} %`,
  },
  {
    title: "Market Cap",
    dataIndex: "marketCapUsd",
    width: 200,
    render: (value) => Number(value).toFixed(0),
  },
  {
    title: "Price",
    dataIndex: "priceUsd",
    width: 150,
    render: (value) => `${Number(value).toFixed(2)} $`,
  },
  {
    title: "",
    width: 30,
    className: "cancelHover",
    render: (_, asset: Asset) => (
      <StyledPlusIcon
        onClick={(e) => {
          e.stopPropagation();
          if (handleOpenModal) {
            handleOpenModal(asset);
          }
        }}
      />
    ),
  },
];
