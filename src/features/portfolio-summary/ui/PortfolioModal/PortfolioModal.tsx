import { ModalWrapper } from "@/shared/ui/ModalWrapper";

import type {
  PortfolioState,
  SavedItems,
} from "@/entities/portfolio/model/portfolio.types";

import { getColumns } from "../../model/columns";

import * as Styled from "./PortfolioModal.style";

type PortfolioModalProps = {
  isOpen: boolean;
  handleCloseModal: () => void;
  handleDeleteAsset: (id: string) => void;
  assetList: PortfolioState["items"];
  totalPortfolioValue: number;
};

export type PortfolioTableData = SavedItems & {
  total: number;
};

export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  handleCloseModal,
  assetList,
  totalPortfolioValue,
  handleDeleteAsset,
}) => {
  const dataSource: PortfolioTableData[] = assetList.map((item) => {
    const price = parseFloat(item.priceUsd);
    const qty = item.qty || 0;

    return {
      ...item,
      total: price * qty,
    };
  });

  const columns = getColumns(handleDeleteAsset);

  return (
    <ModalWrapper isOpen={isOpen} handleCloseModal={handleCloseModal}>
      <Styled.TableWrapper>
        <Styled.CloseButton onClick={handleCloseModal} />
        <Styled.TableContainer>
          <Styled.TableHeader>
            <div>
              <h2 className="title">Мой портфель</h2>
              <span className="subtitle">
                Всего активов: {dataSource.length}
              </span>
            </div>
            <div>
              <span className="subtitle">Общая стоимость: </span>
              <Styled.TotalValue>
                ${totalPortfolioValue.toFixed(2)}
              </Styled.TotalValue>
            </div>
          </Styled.TableHeader>
          <Styled.StyledTable
            columns={columns}
            dataSource={dataSource}
            rowKey="id"
            pagination={{
              pageSize: 8,
            }}
            locale={{
              emptyText: "Портфель пуст",
            }}
          />
        </Styled.TableContainer>
      </Styled.TableWrapper>
    </ModalWrapper>
  );
};
