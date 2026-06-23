import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/Header";

import s from "./index.module.css";

export const AppLayout = () => {
  return (
    <>
      <Header />
      <main className={s.mainContainer}>
        <Outlet />
      </main>
    </>
  );
};
