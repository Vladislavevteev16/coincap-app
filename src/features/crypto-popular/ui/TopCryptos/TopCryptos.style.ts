import styled from "@emotion/styled";

import { Typography } from "antd";

const { Title } = Typography;

export const PopularCoinsWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: auto;
  min-height: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1rem 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  box-sizing: border-box;
`;

export const PopularCoinsHeader = styled(Title)`
  &&& {
    font-size: 1rem;
    font-weight: 600;
    color: #6c757d;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

export const CoinList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem 2rem;
  padding: 0;
  margin: 0;
  list-style: none;
  width: 100%;
`;
