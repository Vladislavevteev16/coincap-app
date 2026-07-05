import styled from "@emotion/styled";
import { Table } from "antd";
import type { Asset } from "@/shared/api/coincap.types";

export const StyledTable = styled(Table<Asset>)`
  &&& {
    background: #ffffff;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    width: 100%;
    height: 100%; // Растягиваем по высоте

    .ant-table {
      border-radius: 12px;
      height: 100%; // Растягиваем
    }

    .ant-table-container {
      border-radius: 12px;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .ant-table-header {
      flex-shrink: 0;
    }

    .ant-table-body {
      flex: 1;
      overflow-y: auto;
      overflow-x: auto;

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

    .ant-table-thead > tr > th {
      background: #fafafa;
      color: #595959;
      font-weight: 600;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.2px;
      padding: 10px 12px;
      border-bottom: 1.5px solid #f0f0f0;
      transition: background 0.2s;
      white-space: nowrap;

      &:not(:last-child) {
        padding-right: 20px;
      }

      &:not(:first-child) {
        padding-left: 20px; 
      }

      &::before {
        display: none;
      }

      @media (max-width: 768px) {
        padding: 8px 8px;
        font-size: 9px;
        letter-spacing: 0.1px;

        &:not(:last-child) {
          padding-right: 12px;
        }

        &:not(:first-child) {
          padding-left: 12px;
        }
      }

      @media (max-width: 480px) {
        padding: 30px 30px;
        font-size: 8px;

        &:not(:last-child) {
          padding-right: 8px;
        }

        &:not(:first-child) {
          padding-left: 8px;
        }
      }
    }

    .ant-table-tbody > tr > td {
      padding: 8px 12px;
      border-bottom: 1px solid #f5f5f5;
      color: #1a1a1a;
      font-size: 12px;
      transition: background 0.2s;


      &:not(:last-child) {
        padding-right: 20px;
      }

      &:not(:first-child) {
        padding-left: 20px;
      }

      @media (max-width: 768px) {
        padding: 6px 8px;
        font-size: 10px;

        &:not(:last-child) {
          padding-right: 12px;
        }

        &:not(:first-child) {
          padding-left: 12px;
        }
      }

      @media (max-width: 480px) {
        padding: 4px 4px;
        font-size: 9px;

        &:not(:last-child) {
          padding-right: 8px;
        }

        &:not(:first-child) {
          padding-left: 8px;
        }
      }
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
        font-size: 11px;
        transition: all 0.2s;

        &:hover {
          color: #40a9ff;
          background: rgba(24, 144, 255, 0.08);
          border-radius: 4px;
        }

        @media (max-width: 480px) {
          font-size: 9px;
          padding: 2px 4px;
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
      flex-wrap: wrap;
      flex-shrink: 0; 

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

        @media (max-width: 480px) {
          min-width: 24px;
          height: 24px;
          line-height: 22px;

          a {
            font-size: 10px;
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

        @media (max-width: 480px) {
          .ant-pagination-item-link {
            min-width: 24px;
            height: 24px;
            line-height: 22px;
            font-size: 10px;
          }
        }
      }

      .ant-pagination-jump-prev,
      .ant-pagination-jump-next {
        .ant-pagination-item-container {
          .ant-pagination-item-ellipsis {
            color: #8c8c8c;
            font-size: 12px;

            @media (max-width: 480px) {
              font-size: 10px;
            }
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

        @media (max-width: 480px) {
          padding: 20px 8px;
          font-size: 12px;
        }
      }
    }

    .ant-table-column-sorters {
      padding: 0;
      gap: 4px;

      .ant-table-column-title {
        flex: none;
        font-size: 11px;

        @media (max-width: 480px) {
          font-size: 8px;
        }
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

          @media (max-width: 480px) {
            font-size: 8px;
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

    @media (max-width: 768px) {
      .ant-table-content {
        overflow-x: auto;

        table {
          min-width: 600px;
        }
      }
    }

    @media (max-width: 480px) {
      .ant-table-content {
        table {
          min-width: 420px;
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
    font-size: 10px;
    color: #8c8c8c;
    text-transform: uppercase;

    @media (max-width: 480px) {
      font-size: 8px;
    }
  }

  .name {
    font-weight: 500;
    color: #1a1a1a;
    font-size: 12px;

    @media (max-width: 480px) {
      font-size: 9px;
    }
  }
`;

export const TableWrapper = styled.div<{ $isLoading?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 16px;
  background: #e4e5ea;
  width: 100%;
  max-width: 100%;
  border-radius: 20px;
  margin-top: 2rem;
  position: relative;
  min-height: 400px;
  height: auto; 
  max-height: 1500px; 
  overflow: hidden;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 20px;
    pointer-events: none;
    z-index: 1;
    opacity: ${({ $isLoading }) => ($isLoading ? 1 : 0)};
    transition: opacity 0.3s ease;
    background: linear-gradient(
      90deg,
      rgba(200, 200, 200, 0.3) 0%,
      rgba(180, 180, 180, 0.5) 25%,
      rgba(200, 200, 200, 0.3) 50%,
      rgba(180, 180, 180, 0.5) 75%,
      rgba(200, 200, 200, 0.3) 100%
    );
    background-size: 200% 100%;
    animation: ${({ $isLoading }) =>
      $isLoading ? "shimmer 1.5s infinite" : "none"};
  }

  @media (max-width: 1024px) {
    padding: 12px;
    max-height: 550px;
  }

  @media (max-width: 768px) {
    padding: 8px;
    border-radius: 12px;
    margin-top: 1.5rem;
    min-height: 350px;
    max-height: 500px;
  }

  @media (max-width: 480px) {
    padding: 4px;
    border-radius: 8px;
    margin-top: 1rem;
    min-height: 300px;
    max-height: 1500px;
  }

  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0;
  height: 100%; // Растягиваем по высоте

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 2px;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

export const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 8px;

  .title {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 480px) {
      font-size: 16px;
    }
  }

  .subtitle {
    font-size: 13px;
    color: #8c8c8c;

    @media (max-width: 768px) {
      font-size: 12px;
    }

    @media (max-width: 480px) {
      font-size: 11px;
      width: 100%;
    }
  }
`;
