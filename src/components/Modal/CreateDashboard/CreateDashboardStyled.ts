import styled from "styled-components";
import theme from "src/styles/theme";

import {
  ButtonContainerStyled as ButtonContainer,
  CreateColumnFormStyled,
  CreateColumnNameInput,
} from "../CreateColumn/CreateColumnStyled";

export const CreateDashboardFormStyled = styled(CreateColumnFormStyled)``;

export const CreateDashboardNameLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${theme.color.black700};
  font-size: 1.5rem;
  font-weight: 500;
`;

export const CreateDashboardColorLabel = styled(CreateDashboardNameLabel)`
  margin-top: 1rem;
`;

export const CreateDashboardNameInput = styled(CreateColumnNameInput)``;

export const ButtonContainerStyled = styled(ButtonContainer)``;

// Color Button
export const ColorButtonContainer = styled.div`
  display: flex;
  gap: 0.8rem;
`;
