import { Routes, Route } from "react-router-dom";

import { AppLayout } from "../layouts";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout />}></Route>
      </Routes>
    </>
  );
};
