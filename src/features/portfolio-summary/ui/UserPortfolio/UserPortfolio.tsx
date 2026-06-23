import { PortfolioIcon } from "../PorfolioIcon";

import { PortfolioTotalPrice } from "../PortfolioTotalPrice/PortfolioTotalPrice";

import s from "./UserPortfolio.module.css";

export const UserPortfolio = () => {
  return (
    <div className={s.userPorfolioContainer}>
      <PortfolioIcon />
      <PortfolioTotalPrice price={5} />
    </div>
  );
};
