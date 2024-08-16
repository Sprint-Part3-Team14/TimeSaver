import theme from "src/styles/theme";
import styled, { keyframes } from "styled-components";

// 슬라이드 인 애니메이션
export const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

// 슬라이드 아웃 애니메이션
export const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

export const SidePageContainer = styled.div<{ isClose: boolean }>`
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
