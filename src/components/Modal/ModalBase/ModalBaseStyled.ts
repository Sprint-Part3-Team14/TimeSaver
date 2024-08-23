import theme from "src/styles/theme";
import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background-color: white;
  padding: 2.5rem;
  border-radius: 0.6rem;
  width: 20%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ModalBackground = styled.div`
  position: fixed;
  inset: 0;
  background-color: ${theme.color.blackOverlay};
  z-index: 20;
`;

// 구성 요소
export const ModalTitle = styled.h1`
  color: ${theme.color.black700};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const CloseButton = styled.button`
  cursor: pointer;
`;
