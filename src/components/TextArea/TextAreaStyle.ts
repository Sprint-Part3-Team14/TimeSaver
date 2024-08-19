import theme from "src/styles/theme";
import styled from "styled-components";

export const CardExplanation = styled.textarea<{ additionalStyle?: string }>`
  border: 0.1rem solid ${theme.color.gray700};
  flex-grow: 1;
  padding: 1.6rem;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  color: ${theme.color.black900};

  ${({ additionalStyle }) => additionalStyle};
`;
