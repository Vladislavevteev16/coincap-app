import { TopCryptos } from "@/entities/CryptoPopular";
import { UserPortfolio } from "@/features/portfolio-summary";

import s from "./index.module.css";

export const Header = () => {
  return (
    <header className={s.headerWrapper}>
      <TopCryptos />
      <UserPortfolio />
    </header>
  );
};
