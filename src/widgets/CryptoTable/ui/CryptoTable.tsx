import { Table } from "antd";
import { useState } from "react";
import { AddToPortfolioModel } from "./AddToPortfolioModel";
import { useNavigate } from "react-router-dom";
import { useCryptoTable } from "../model/useCryptoTable";
import { columns } from "../model/columns";
import styled from "@emotion/styled";
import type { Asset } from "@/shared/api/coincap.types";

const PAGE_SIZE = 10;

const StyledTable = styled(Table<Asset>)`
  .ant-pagination {
    display: flex;
    justify-content: center;
  }

  .ant-table-cell.cancelHover {
    &.ant-table-cell-row-hover {
      background-color: transparent !important;
    }
  }
`;

export const CryptoTable: React.FC = () => {
  const navigate = useNavigate();
  
  const [page, setPage] = useState<number>(1);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = (): void => setIsOpenModal(true);

  const handleCloseModal = (): void => setIsOpenModal(false);

  const { data, isLoading, isError } = useCryptoTable(page);

  const offset = (page - 1) * PAGE_SIZE;

  const columnsWithOffset = columns(offset, handleOpenModal);

  if (isError) {
    return <div>Не удалось загрузить криптовалюты</div>;
  }

  return (
    <>
      <StyledTable
        rowKey="id"
        dataSource={data}
        loading={isLoading}
        size="small"
        columns={columnsWithOffset}
        bordered
        pagination={{
          current: page,
          pageSize: PAGE_SIZE,
          showSizeChanger: false,
          onChange: setPage,
        }}
        onRow={(el) => ({
          onClick: () => navigate(`/assets/${el.id}`),
        })}
      />
      <AddToPortfolioModel
        handleCloseModal={handleCloseModal}
        isOpen={isOpenModal}
      />
    </>
  );
};
