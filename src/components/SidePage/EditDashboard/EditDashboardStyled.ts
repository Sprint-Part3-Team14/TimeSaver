import theme from "src/styles/theme";
import styled from "styled-components";

export const EditDashboardLayout = styled.form`
  display: flex;
  flex-direction: column;
`;

export const EditDashboardSection = styled.div`
  padding: 4.2rem;
  flex-grow: 1;

  &:not(last-child) {
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
