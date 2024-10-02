import styled from "styled-components";
import theme from "src/styles/theme";
import { ColorButtonContainer } from "src/components/Modal/CreateDashboard/CreateDashboardStyled";
import { EditDashboardSection } from "../../EditDashboardStyled";

export const ContainerStyled = styled(EditDashboardSection)`
  display: flex;
  flex-direction: column;
  gap: 1.9rem;
  justify-content: center;
  flex-grow: 0;
`;

export const Title = styled.label`
  color: ${theme.color.black700};
  font-size: 2rem;
  font-weight: 700;
`;

export const ColorButtonSection = styled(ColorButtonContainer)``;

export const RenameInput = styled.input`
  border-radius: 0.6rem;
  border: 0.1rem solid ${theme.color.gray700};
  font-size: 1.6rem;
  padding: 1.6rem 1rem;
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
  padding : 1.3rem 0;
`;
