import theme from "src/styles/theme";
import styled from "styled-components";

export const RenameForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const ButtonContainerStyled = styled.div`
  width: 50%;
  margin-left: auto;
  display: flex;
  gap: 1rem;
`;

// input 관련
export const RenameInput = styled.input`
  padding: 1.5rem 1rem;
  border: 0.1rem solid ${theme.color.gray700};
  border-radius: 0.6rem;
  outline-color: ${theme.color.pink400};
`;
