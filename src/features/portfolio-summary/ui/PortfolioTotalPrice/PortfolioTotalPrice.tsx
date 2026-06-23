import s from "./PortfolioTotalPrice.module.css";

export const PortfolioTotalPrice: React.FC<{ price: number }> = ({ price }) => {
  return (
    <div className={s.totalPriceContainer}>
      <span>Итого:</span>
      <span>{price} USD</span>
    </div>
  );
};
