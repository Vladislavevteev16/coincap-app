import styled from "@emotion/styled";
import { Table } from "antd";
import type { Asset } from "@/shared/api/coincap.types";

export const StyledTable = styled(Table<Asset>)`
  &&& {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

    .ant-table {
      border-radius: 12px;
    }

    .ant-table-container {
      border-radius: 12px;
    }

    .ant-table-thead > tr > th {
      background: #fafafa;
      color: #595959;
      font-weight: 600;
      font-size: 12px;
      text-transform: uppercase;
      letter-spacing: 0.3px;
      padding: 10px 12px;
      border-bottom: 1.5px solid #f0f0f0;
      transition: background 0.2s;

      &::before {
        display: none;
      }
    }

    .ant-table-tbody > tr > td {
      padding: 8px 12px;
      border-bottom: 1px solid #f5f5f5;
      color: #1a1a1a;
      font-size: 13px;
      transition: background 0.2s;
    }

    .ant-table-tbody > tr {
      cursor: pointer;
      transition: all 0.2s;

      &:hover > td {
        background: #f7faff !important;
      }

      &:last-child > td {
        border-bottom: none;
      }
    }

    .ant-table-tbody > tr.ant-table-row-selected > td {
      background: #e6f0fa;
    }

    .ant-table-cell {
      .ant-btn-link {
        color: #1890ff;
        font-weight: 500;
        padding: 2px 6px;
        height: auto;
        font-size: 12px;
        transition: all 0.2s;

        &:hover {
          color: #40a9ff;
          background: rgba(24, 144, 255, 0.08);
          border-radius: 4px;
        }
      }
    }

    .ant-table-cell.cancelHover {
      &.ant-table-cell-row-hover {
        background-color: transparent !important;
      }
    }

    .ant-pagination {
      display: flex;
      justify-content: center;
      padding: 12px 0 4px;
      margin: 0;

      .ant-pagination-item {
        border-radius: 6px;
        border: 1px solid #d9d9d9;
        transition: all 0.2s;
        min-width: 30px;
        height: 30px;
        line-height: 28px;

        a {
          color: #595959;
          font-weight: 500;
          font-size: 12px;
        }

        &:hover {
          border-color: #1890ff;

          a {
            color: #1890ff;
          }
        }

        &.ant-pagination-item-active {
          background: #1890ff;
          border-color: #1890ff;

          a {
            color: #ffffff;
          }

          &:hover {
            background: #40a9ff;
            border-color: #40a9ff;
          }
        }
      }

      .ant-pagination-prev,
      .ant-pagination-next {
        .ant-pagination-item-link {
          border-radius: 6px;
          border: 1px solid #d9d9d9;
          transition: all 0.2s;
          color: #595959;
          min-width: 30px;
          height: 30px;
          line-height: 28px;
          font-size: 12px;

          &:hover {
            border-color: #1890ff;
            color: #1890ff;
          }
        }

        &.ant-pagination-disabled {
          .ant-pagination-item-link {
            opacity: 0.5;
            cursor: not-allowed;

            &:hover {
              border-color: #d9d9d9;
              color: #595959;
            }
          }
        }
      }

      .ant-pagination-jump-prev,
      .ant-pagination-jump-next {
        .ant-pagination-item-container {
          .ant-pagination-item-ellipsis {
            color: #8c8c8c;
            font-size: 12px;
          }
        }
      }
    }

    .ant-table-empty {
      .ant-table-tbody > tr > td {
        padding: 30px 12px;
        text-align: center;
        color: #8c8c8c;
        font-size: 14px;
      }
    }

    .ant-table-column-sorters {
      padding: 0;
      gap: 4px;

      .ant-table-column-title {
        flex: none;
        font-size: 12px;
      }
    }

    .ant-table-column-sorter {
      color: #bfbfbf;

      .ant-table-column-sorter-inner {
        .ant-table-column-sorter-up,
        .ant-table-column-sorter-down {
          font-size: 10px;

          &.active {
            color: #1890ff;
          }
        }
      }
    }

    .ant-spin-container {
      .ant-spin {
        .ant-spin-dot-item {
          background: #1890ff;
        }
      }
    }

    .ant-table-body {
      &::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }

      &::-webkit-scrollbar-track {
        background: #f5f5f5;
        border-radius: 3px;
      }

      &::-webkit-scrollbar-thumb {
        background: #d9d9d9;
        border-radius: 3px;

        &:hover {
          background: #bfbfbf;
        }
      }
    }
  }
`;

export const CryptoName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;

  .symbol {
    font-size: 11px;
    color: #8c8c8c;
    text-transform: uppercase;
  }

  .name {
    font-weight: 500;
    color: #1a1a1a;
    font-size: 13px;
  }
`;

export const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  background: #e4e5ea;
  width: 100%;
  border-radius: 20px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 4px;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  .title {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
  }

  .subtitle {
    font-size: 13px;
    color: #8c8c8c;
  }
`;
