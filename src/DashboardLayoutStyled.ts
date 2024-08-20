import styled from "styled-components";

export const DashboardLayout = styled.div`
  box-sizing: border-box;
  height: 100vh;
  display: grid;
  grid-template-rows: 7rem 1fr;
  grid-template-columns: 30rem 1fr;
  grid-template-areas:
    "a a a"
    "b c c";
`;

export const HeaderLayout = styled.header`
  grid-area: a;
  background-color: blue;
`;

export const SideBarLayout = styled.aside`
  grid-area: b;
  border-right: 0.1rem solid ${({ theme }) => theme.color.gray700};
`;

export const ContentLayout = styled.main`
  position: relative;
  grid-area: c;
  min-width: 0;
`;

export default DashboardLayout;
