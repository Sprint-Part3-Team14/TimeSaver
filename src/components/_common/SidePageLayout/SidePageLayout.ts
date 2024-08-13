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

export const Container = styled.div<{ isClose: boolean; customStyle?: string }>`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  width: 60%;
  height: 100%;
  background-color: ${theme.color.white};
  box-shadow: 0rem 2rem 2rem 0rem rgba(90, 90, 90, 0.5);

  ${({ customStyle }) => (customStyle ? customStyle : "")}

  animation: ${({ isClose }) => (isClose ? slideOut : slideIn)} 0.5s forwards;
`;
