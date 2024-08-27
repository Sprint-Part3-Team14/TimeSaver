import theme from "src/styles/theme";
import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background: ${theme.color.black900};
  opacity: 0.7;
`;

export const ModalContainer = styled.div<{ usePortal: boolean }>`
  position: fixed;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 95vh;
  width: 95vw;
  background: ${theme.color.white};
  padding: 1.5rem;
  padding-bottom: 2.5rem;
  box-shadow: 0 0.1rem 0.3rem rgba(0, 0, 0, 0.1);

  @media ${theme.device.tablet} {
    height: min-content;
    width: 30rem;
    border-radius: 0.75rem;
    padding-bottom: 2rem;
    outline: ${props => (props.usePortal ? "none" : `0.1rem solid ${theme.color.gray800}`)};
    ${props =>
      props.usePortal
        ? `
        right: 50%;
        top: 50%;
        transform: translate(50%, -50%);
      `
        : `
        right: 0;
        top: 0;
        position: absolute;
      `}
  }
`;

export const Header = styled.header`
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.75rem;
  font-weight: bold;
  line-height: 1.675rem;
`;

export const CloseButton = styled.button`
  height: 2.5rem;
  width: 2.5rem;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  svg {
    height: 100%;
    width: 100%;
  }
`;

export const ContentContainer = styled.div`
  margin-bottom: 4rem;
`;
