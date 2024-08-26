import theme from "src/styles/theme";
import styled from "styled-components";

export const PaginationContainer = styled.div<{ addStyle?: string }>`
  ${theme.displays.rowCenter};
  margin: 20px 0;

  ${({ addStyle }) => addStyle};
`;

export const PageButton = styled.button<{ disabled?: boolean }>`
  ${theme.displays.rowCenter};
  width: 40px;
  height: 40px;
  border: 1px solid ${theme.color.gray600};
  background-color: ${({ disabled }) => (disabled ? theme.color.gray500 : theme.color.white)};
  color: ${({ disabled }) => (disabled ? theme.color.gray900 : theme.color.black900)};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};

  &:first-child {
    border-right: none;
    border-radius: 4px 0 0 4px;
  }

  &:last-child {
    border-left: none;
    border-radius: 0 4px 4px 0;
  }

  &:hover:not(:disabled) {
    background-color: ${theme.color.gray600};
  }
`;

export const PageNumber = styled.span`
  font-size: ${theme.fontSize.normal};
  margin: 0 1rem;
`;
