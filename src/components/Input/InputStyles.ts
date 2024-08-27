import styled from "styled-components";
import theme from "src/styles/theme";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: ${theme.color.black700};
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: 0.1rem solid ${theme.color.gray600};
  border-radius: 0.4rem; /* 4px -> 0.4rem */
  background-color: ${theme.color.white};
  color: ${theme.color.black700};
  transition: border-color 0.3s;

  &:hover {
    border-color: ${theme.color.blue400};
  }

  &:focus {
    border-color: ${theme.color.blue400};
    outline: none;
  }
`;
