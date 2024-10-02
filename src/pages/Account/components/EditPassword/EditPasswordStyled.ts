import styled from "styled-components";
import theme from "src/styles/theme";

export const PassWordInputBox = styled.label`
  color: ${theme.color.black700};
  font-size: 1.8rem;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  height: 11rem;
`;

export const TitleStyle = styled.h2`
  color: ${theme.color.black700};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const AddButtonStyle = `
  margin-top : -1.5rem;
`;
