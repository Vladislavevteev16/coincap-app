import { ModalPortal } from "@/shared/ui/modal-portal";

import { formatPrice } from "../../lib/utils/formatPrice";

import { useAssetQuantity } from "../../lib/hooks/useAssetQuantity";

import * as Styled from "./AddToPortfolioModal.style";

import { useAppDispatch } from "@/app/store";

import { addAsset } from "@/entities/portfolio/model/portfolio.slice";

type AddToPortfolioModel = {
  isOpen: boolean;
  handleCloseModal: () => void;
};

export const AddToPortfolioModal: React.FC<AddToPortfolioModel> = ({
  isOpen,
  handleCloseModal,
}) => {
  const dispatch = useAppDispatch();

  const { currentAsset, quantity, totalPrice, handleChangeTotalPrice } =
    useAssetQuantity();

  const handleAddAssetInPortfolio = () => {
    dispatch(
      addAsset({
        id: currentAsset?.id as string,
        name: currentAsset?.name as string,
        priceUsd: currentAsset?.priceUsd as string,
        qty: quantity,
      }),
      handleCloseModal(),
    );
  };
  return (
    <ModalPortal handleCloseModal={handleCloseModal} isOpen={isOpen}>
      <Styled.PortfolioModalContainer>
        <Styled.CloseButton onClick={handleCloseModal} />

        <Styled.ModalTitle level={2}>
          Купить {currentAsset?.name}
        </Styled.ModalTitle>
        <Styled.AssetSymbol>{currentAsset?.symbol}</Styled.AssetSymbol>

        <Styled.PriceInfo>
          <Styled.PriceItem>
            <Styled.PriceLabel>Цена</Styled.PriceLabel>
            <Styled.PriceValue>
              ${Number(currentAsset?.priceUsd || 0).toFixed(2)}
            </Styled.PriceValue>
          </Styled.PriceItem>
          <Styled.PriceItem>
            <Styled.PriceLabel>Изменение (24ч)</Styled.PriceLabel>
            <Styled.PriceValue>
              {Number(currentAsset?.changePercent24Hr || 0).toFixed(2)}%
            </Styled.PriceValue>
          </Styled.PriceItem>
          <Styled.PriceItem>
            <Styled.PriceLabel>Количество</Styled.PriceLabel>
            <Styled.PriceValue>{quantity}</Styled.PriceValue>
          </Styled.PriceItem>
        </Styled.PriceInfo>

        <Styled.InputLabel>Введите количество:</Styled.InputLabel>
        <Styled.StyledInputNumber
          min={0.0001}
          max={1000000}
          step={0.0001}
          placeholder="0.00"
          precision={2}
          value={quantity}
          onChange={handleChangeTotalPrice}
        />

        <Styled.TotalPriceContainer>
          <Styled.TotalPriceLabel>Итого к оплате</Styled.TotalPriceLabel>
          <div>
            <Styled.TotalPriceValue>
              ${formatPrice(totalPrice)}
            </Styled.TotalPriceValue>
            <Styled.TotalPriceUsd>USD</Styled.TotalPriceUsd>
          </div>
        </Styled.TotalPriceContainer>

        <Styled.ButtonContainer>
          <Styled.CancelButton onClick={handleCloseModal}>
            Отмена
          </Styled.CancelButton>
          <Styled.AddButton onClick={handleAddAssetInPortfolio}>
            Добавить
          </Styled.AddButton>
        </Styled.ButtonContainer>
      </Styled.PortfolioModalContainer>
    </ModalPortal>
  );
};
