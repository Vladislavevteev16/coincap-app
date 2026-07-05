import styled from "@emotion/styled";

import { Outlet } from "react-router-dom";

import { Header } from "@/widgets/Header";

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  overflow-y: auto;
`;

export const AppLayout = () => {
  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};
