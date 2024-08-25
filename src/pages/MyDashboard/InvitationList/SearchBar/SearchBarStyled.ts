import theme from "src/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  margin: 0 2.8rem;
  gap: 0.8rem;
  border-radius: 0.6rem;
  border: 0.1rem solid ${theme.color.gray700};
  background: ${theme.color.white};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;

  &::placeholder {
    color: ${theme.color.gray800};
    font-size: 1.6rem;
  }

  &:focus {
    outline: none;
  }
`;
