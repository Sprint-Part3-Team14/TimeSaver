import theme from "src/styles/theme";
import styled from "styled-components";

export const EditDashboardContainer = `
  width : 45%;
  height  : 100vh;
  overflow-y : scroll;
  overflow-x : hidden;
`;

export const EditDashboardLayout = styled.form`
  display: flex;
  flex-direction: column;
`;

export const EditDashboardSection = styled.div`
  padding: 2rem 3rem 3rem;
  flex-basis: 0;

  &:not(:last-child) {
    border-bottom: 0.1rem solid ${theme.color.gray700};
  }
`;

export const HeaderStyled = `
  justify-content : flex-start;
  gap : 2.4rem;
`;

export const SidePageTitleStyled = styled.h1`
  color: ${theme.color.black700};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const AddButtonStyle = `
  margin : 3.5rem;
  font-weight : 900;
  color : ${theme.color.pink900};
`;
