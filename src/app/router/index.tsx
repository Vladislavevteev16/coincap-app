import { Routes, Route } from "react-router-dom";
import { CryptoCurrencyPage } from "@/pages/crypto-currency-page";

import { AppLayout } from "../layouts";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<CryptoCurrencyPage />} />
      </Route>
      </Routes>
    </>
  );
};
