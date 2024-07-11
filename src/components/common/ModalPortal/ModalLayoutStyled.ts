import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background: black;
  opacity: 0.7;
`;

export const ModalContainer = styled.div<{ usePortal: boolean }>`
  position: fixed;
  z-index: 20;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  background: white;
  padding: 1.5rem;
  padding-bottom: 2.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    height: min-content;
    width: 30rem;
    border-radius: 0.75rem;
    padding-bottom: 2rem;
    outline: ${(props) => (props.usePortal ? "none" : "1px solid #A4a1aa")};
    ${(props) =>
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
  background-image: url('/icons/CloseIcon.tsx');
`;

export const ContentContainer = styled.div`
  margin-bottom: 4rem; /* equivalent to mb-16 */
`;
