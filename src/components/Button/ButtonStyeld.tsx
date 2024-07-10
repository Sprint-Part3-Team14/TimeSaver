import styled from "styled-components";

const buttonSize = {
  large: "1.4rem 0",
  normal: "0.7rem 0",
  small: "0.6rem 0",
};

export const Container = styled.button<{
  fontSize: "large" | "small" | "extraSmall";
  styleVariant: "default" | "white";
  size: "large" | "normal" | "small";
  width: string;
}>`
  width: ${({ width }) => width};
  background-color: ${({ theme, styleVariant }) =>
    styleVariant === "white" ? theme.color.white : theme.color.pink900};
  color: ${({ theme, styleVariant }) => (styleVariant === "white" ? theme.color.gray900 : theme.color.white)};
  border: ${({ theme, styleVariant }) => (styleVariant === "white" ? `1px solid ${theme.color.gray700}` : "none")};
  padding: ${({ size }) => buttonSize[size]};
  border-radius: ${({ size }) => (size === "large" ? "8px" : "4px")};
  cursor: pointer;
  font-size: ${({ fontSize, theme }) => theme.fontSize[fontSize]};
  font-weight: 500;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme, styleVariant }) =>
      styleVariant === "white" ? theme.color.gray600 : theme.color.pink400};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.color.gray600};
  }
`;
