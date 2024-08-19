import theme from "src/styles/theme";
import styled from "styled-components";

const DropDownBaseStyle = styled.div`
  border: 0.1rem solid ${theme.color.gray600};
  border-radius: 0.6rem;
  padding: 1rem 1.5rem;
`;

export const DropDownContainer = styled(DropDownBaseStyle)<{ isOpen: boolean }>`
  display: flex;
  gap: 1rem;
  align-items: center;
  padding: 0 1.5rem;
  position: relative;
  min-width: 13rem;
  text-align: center;

  ${({ isOpen }) => (isOpen ? "border-radius: 0.6rem 0.6rem 0 0;" : "")}

  &:active {
    background-color: ${theme.color.gray500};
  }
`;

export const DropDownUnder = styled.div`
  background-color: ${theme.color.white};
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  z-index: 1;
`;

export const DropDownOne = styled(DropDownBaseStyle)`
  border-radius: 0;
  width: 100%;
  box-sizing: border-box;

  &:last-child {
    border-radius: 0 0 0.6rem 0.6rem;
  }

  &:hover {
    background-color: ${theme.color.gray500};
  }

  &:active {
    background-color: ${theme.color.gray500};
  }
`;
