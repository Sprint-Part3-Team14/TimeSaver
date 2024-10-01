import theme from "src/styles/theme";
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
  exceptionStyle?: string;
}>`
  text-align: center;
  width: ${({ width }) => width};
  background-color: ${({ styleVariant }) => (styleVariant === "white" ? theme.color.white : theme.color.pink900)};
  color: ${({ styleVariant }) => (styleVariant === "white" ? theme.color.gray900 : theme.color.white)};
  border: ${({ styleVariant }) => (styleVariant === "white" ? `0.1rem solid ${theme.color.gray700}` : "none")};
  padding: ${({ size }) => (size ? buttonSize[size] : "1.5rem 1rem")};
  border-radius: ${({ size }) => (size === "large" ? "0.8rem" : "0.4rem")};
  cursor: pointer;
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]};
  font-weight: 500;
  transition: background-color 0.3s;
  ${({ exceptionStyle }) => (exceptionStyle ? exceptionStyle : "")};

  &:hover {
    background-color: ${({ styleVariant }) => (styleVariant === "white" ? theme.color.gray600 : "#eb7575")};
  }

  &:disabled {
    background-color: ${theme.color.gray600};
  }

  &:active {
    background-color: ${({ styleVariant }) => (styleVariant === "white" ? theme.color.gray500 : "#df5656")};
  }
`;
