import theme from "src/styles/theme";
import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  background-color: white;
  padding: 6rem 4rem;
  border-radius: 0.6rem;
  width: 50rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;

  @media ${theme.device.tablet} {
    width: 40rem;
  }

  @media ${theme.device.mobile} {
    width: 20rem;
  }
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
