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


  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    max-width: 100%;
    min-height: 60px;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 0.75rem;
    gap: 0.3rem;
    min-height: 50px;
  }
`;

export const ErrorContainer = styled.div`
  width: 100%;
  padding: 0.5rem 0;

  @media (max-width: 480px) {
    padding: 0.25rem 0;
  }
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

    @media (max-width: 480px) {
      font-size: 0.8rem;
      letter-spacing: 0.3px;
    }
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

  @media (max-width: 768px) {
    gap: 1rem 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 0.5rem 1rem;
    justify-content: center;
  }
`;

export const SkeletonItem = styled.li`
  width: 120px;
  height: 30px;
  background: #e9ecef;
  border-radius: 6px;
  overflow: hidden;

  @media (max-width: 480px) {
    width: 80px;
    height: 24px;
  }
`;

export const SkeletonPulse = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #e9ecef 0%, #f8f9fa 50%, #e9ecef 100%);
  background-size: 200% 100%;
  animation: pulse 1.5s ease-in-out infinite;

  @keyframes pulse {
    0% {
      background-position: 200% 0;
    }
    100% {
      background-position: -200% 0;
    }
  }
`;
