import type { ColumnsType } from "antd/es/table";

import { CryptoName } from "../ui/PortfolioModal/PortfolioModal.style";

import type { PortfolioTableData } from "../ui/PortfolioModal/PortfolioModal";

export const columns: ColumnsType<PortfolioTableData> = [
  {
    title: "Название",
    dataIndex: "name",
    key: "name",
    render: (name: string, record: PortfolioTableData) => (
      <CryptoName>
        <span className="name">{name}</span>
        <span className="symbol">{record.id}</span>
      </CryptoName>
    ),
    sorter: (a, b) => a.name.localeCompare(b.name),
  },
  {
    title: "Цена",
    dataIndex: "priceUsd",
    key: "priceUsd",
    render: (price: string) => `$${parseFloat(price).toFixed(2)}`,
    sorter: (a, b) => parseFloat(a.priceUsd) - parseFloat(b.priceUsd),
  },
  {
    title: "Количество",
    dataIndex: "qty",
    key: "qty",
    render: (qty: number) => qty.toFixed(2),
    sorter: (a, b) => a.qty - b.qty,
  },
  {
    title: "Итого",
    dataIndex: "total",
    key: "total",
    render: (total: number) => `$${total.toFixed(2)}`,
    sorter: (a, b) => a.total - b.total,
  },
];
