import { TopCryptos } from "@/entities/CryptoPopular";

import s from "./index.module.css";

export const Header = () => {
  return (
    <header className={s.headerWrapper}>
      <TopCryptos />
    </header>
  );
};
