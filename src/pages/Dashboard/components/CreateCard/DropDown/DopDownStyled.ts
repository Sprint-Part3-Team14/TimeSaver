import theme from "src/styles/theme";
import styled from "styled-components";

const DropDownBaseStyle = styled.div`
  border: 0.1rem solid ${theme.color.gray600};
  border-radius: 0.6rem;
  padding: 1rem 1.5rem;
`;

export const DropDownContainer = styled(DropDownBaseStyle)`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;
  position: relative;

  &:active {
    background-color: ${theme.color.gray500};
  }
`;

export const DropDownUnder = styled(DropDownBaseStyle)`
  background-color: ${theme.color.white};
  position: absolute;
  background-color: ${theme.color.white};
  left: 0;
  right: 0;
  top: 100%;
  z-index: 1;
`;
