import { Typography } from "antd";

import { AddToPortfolioModal } from "./AddToPortfolioModal";
import { useNavigate } from "react-router-dom";

import { columns } from "../model/columns";

import * as Styled from "./CryptoTable.style";

import { useCryptoTableLogic } from "../lib/hooks/useCryptoTableLogic";

const { Title, Text } = Typography;

const PAGE_SIZE = 10;

export const CryptoTable: React.FC = () => {
  const navigate = useNavigate();

  const {
    data,
    handleCloseModal,
    handleOpenModal,
    isError,
    isLoading,
    isOpenModal,
    offset,
    page,
    setPage,
  } = useCryptoTableLogic();

  const columnsWithOffset = columns(offset, handleOpenModal);

  if (isError) {
    return <div>Не удалось загрузить криптовалюты</div>;
  }

  return (
    <Styled.TableWrapper>
      <Styled.TableContainer>
        <Styled.TableHeader>
          <div>
            <Title level={1} className="title">
              Cryptocurrencies
            </Title>
            <Text className="subtitle">Real-time prices and market data</Text>
          </div>
        </Styled.TableHeader>
        <Styled.StyledTable
          rowKey="id"
          dataSource={data}
          loading={isLoading}
          size="small"
          columns={columnsWithOffset}
          bordered={false}
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
      </Styled.TableContainer>{" "}
      <AddToPortfolioModal
        handleCloseModal={handleCloseModal}
        isOpen={isOpenModal}
      />
    </Styled.TableWrapper>
  );
};
