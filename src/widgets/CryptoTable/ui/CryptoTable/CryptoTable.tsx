import { Typography } from "antd";

import { AddToPortfolioModal } from "../AddToPortfolioModal";

import { columns } from "../../model/columns";

import { useCryptoTableLogic } from "../../lib/hooks/useCryptoTableLogic";
import { useCheckMobile } from "../../lib/hooks/useCheckMobile";

import { MobileCryptoList } from "../MobileCryptoList/ui/";

import * as Styled from "./CryptoTable.style";

const { Title, Text } = Typography;

const PAGE_SIZE = 10;

export const CryptoTable: React.FC = () => {
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
    handleRowNavigate,
  } = useCryptoTableLogic();

  const { isMobile } = useCheckMobile();

  const columnsWithOffset = columns(offset, handleOpenModal);

  if (isError) {
    return <div>Не удалось загрузить криптовалюты</div>;
  }

  return (
    <Styled.TableWrapper $isLoading={isLoading}>
      <Styled.TableContainer>
        <Styled.TableHeader>
          <div>
            <Title level={1} className="title">
              Криптовалюты
            </Title>
            <Text className="subtitle">
              Цены и рыночные данные в режиме реального времени
            </Text>
          </div>
        </Styled.TableHeader>
        {isMobile ? (
          <MobileCryptoList
            data={data || []}
            isLoading={isLoading}
            onAddToPortfolio={handleOpenModal}
          />
        ) : (
          <div style={{ position: "relative" }}>
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
              onRow={handleRowNavigate}
            />
          </div>
        )}
      </Styled.TableContainer>
      <AddToPortfolioModal
        handleCloseModal={handleCloseModal}
        isOpen={isOpenModal}
      />
    </Styled.TableWrapper>
  );
};
