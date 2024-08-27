import theme from "src/styles/theme";
import styled from "styled-components";

export const PaginationContainer = styled.div<{ addStyle?: string }>`
  ${theme.displays.rowCenter};
  margin: 2rem 0;

  ${({ addStyle }) => addStyle};
`;

export const PageButton = styled.button<{ disabled?: boolean }>`
  ${theme.displays.rowCenter};
  width: 4rem;
  height: 4rem;
  border: 0.1rem solid ${theme.color.gray600};
  background-color: ${({ disabled }) => (disabled ? theme.color.gray500 : theme.color.white)};
  color: ${({ disabled }) => (disabled ? theme.color.gray900 : theme.color.black900)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:first-child {
    border-right: none;
    border-radius: 0.4rem 0 0 0.4rem;
  }

  &:last-child {
    border-left: none;
    border-radius: 0 0.4rem 0.4rem 0;
  }

  &:hover:not(:disabled) {
    background-color: ${theme.color.gray600};
  }
`;

export const PageNumber = styled.span`
  font-size: ${theme.fontSize.normal};
  margin: 0 1rem;
`;
