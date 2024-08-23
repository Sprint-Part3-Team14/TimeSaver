import styled from "styled-components";
import theme from "src/styles/theme";
import { ButtonContainerStyled } from "../RenameColumn/RenameColumnStyled";

export const ButtonContainer = styled(ButtonContainerStyled)`
  width: 100%;
`;

export const WarningText = styled.p`
  font-size: 1.6rem;
  color: ${theme.color.pink900};
  font-weight: 700;
`;
