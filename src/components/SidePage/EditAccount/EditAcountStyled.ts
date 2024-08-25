import { CommonPadding } from "src/components/SidePage/EditDashboard/components/DashboardMember/DashboardMemberStyled";
import theme from "src/styles/theme";
import styled from "styled-components";

// Common Style
export const PageSetting = `
  width : 40%;
  max-height : 100vh;
  overflow-y : scroll;
  overflow-x : hidden;
`;

export const AddHeaderStyle = `
  gap : 1.5rem;
`;

export const AddButtonStyle = `
  margin-top : -1.5rem;
`;

export const Container = styled.div`
  ${CommonPadding}
  padding: 3.5rem;

  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

export const TitleStyle = styled.h2`
  color: ${theme.color.black700};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const PageTitleStyle = styled(TitleStyle)`
  margin-right: auto;
`;

export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const InputLabel = styled.label`
  color: ${theme.color.black700};
  font-size: 1.8rem;
  font-weight: 500;

  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const InputStyle = styled.input`
  border-radius: 0.6rem;
  border: 0.1rem solid ${theme.color.gray700};
  padding: 1.5rem;
  font-size: 1.6rem;
  outline-color: ${theme.color.pink400};

  &:placeholder {
    color: v ${theme.color.gray800};
  }
`;
