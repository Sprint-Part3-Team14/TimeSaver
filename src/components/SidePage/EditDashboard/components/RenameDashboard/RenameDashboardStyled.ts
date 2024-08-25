import styled from "styled-components";
import theme from "src/styles/theme";
import { ColorButtonContainer } from "src/components/Modal/CreateDashboard/CreateDashboardStyled";
import { InputStyle } from "src/components/SidePage/EditAccount/EditAcountStyled";
import { EditDashboardSection } from "../../EditDashboardStyled";

export const ContainerStyled = styled(EditDashboardSection)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  justify-content: center;
  flex-grow: 0;
`;

export const Title = styled.label`
  color: ${theme.color.black700};
  font-size: 2rem;
  font-weight: 700;
`;

export const ColorButtonSection = styled(ColorButtonContainer)``;

export const RenameInput = styled(InputStyle)`
  padding: 0.1rem 1rem;
  outline-color: ${theme.color.pink400};
  width: auto;

  &::placeholder {
    color: ${theme.color.gray700};
    font-size: 1.6rem;
  }
`;

export const HeaderLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ButtonLayout = `
  margin-left : auto;
`;
