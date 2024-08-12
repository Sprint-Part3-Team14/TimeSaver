import theme from "src/styles/theme";
import styled, { keyframes } from "styled-components";

// 슬라이드 인 애니메이션
const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// 슬라이드 아웃 애니메이션
const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const DetailContainer = styled.div<{ isClose: boolean }>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  width: 60%;
  height: 100%;
  background-color: ${theme.color.white};
  box-shadow: 0rem 2rem 2rem 0rem rgba(90, 90, 90, 0.5);
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 7.1rem 1fr;
  grid-template-areas:
    "a a"
    "b c";

  animation: ${({ isClose }) => (isClose ? slideOut : slideIn)} 0.5s forwards;
`;

export const DetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.3rem;
  grid-area: a;
  box-sizing: border-box;
  border-bottom: 1px solid ${theme.color.gray600};
`;

export const DetailContent = styled.div`
  padding: 2.3rem;
  border-right: solid 0.1rem ${theme.color.gray600};
  grid-area: b;
`;

export const DetailComments = styled.section`
  padding: 2.3rem;
  grid-area: c;
`;

export const Button = styled.button`
  cursor: pointer;
`;
