import { UserPortfolio } from "@/features/portfolio-summary";

import s from "./index.module.css";
import { TopCryptos } from "@/features/crypto-popular";

export const Header = () => {
  return (
    <header className={s.headerWrapper}>
      <TopCryptos />
      <UserPortfolio />
    </header>
  );
};
