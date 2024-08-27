import theme from "src/styles/theme";
import styled from "styled-components";

export const Wrapper = styled.div`
  min-height: 7.4rem;
  margin-bottom: 1.6rem;
  position: relative;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 0.8rem;
  font-size: 1.2rem;
  font-weight: bold;
`;

export const Input = styled.input<{ isInvalid: boolean }>`
  border: 0.1rem solid ${({ isInvalid }) => (isInvalid ? "red" : theme.color.gray600)};
  outline: none;
  border-radius: 0.8rem;
  padding: 1.2rem 1.6rem;
  width: 100%;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.small`
  display: flex;
  margin-top: 0.4rem;
  font-size: 1.2rem;
  color: red;
`;

export const ToggleButton = styled.span`
  position: absolute;
  top: 3rem;
  right: 1.5rem;
  cursor: pointer;
`;
