import styled from "styled-components";

export const DashboardLayout = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 70px 1fr;
  grid-template-columns: 300px 1fr;
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
  padding: 20px;
  border-right: 1px solid ${({ theme }) => theme.color.gray700};
`;

export const ContentLayout = styled.main`
  grid-area: c;
  min-width: 0;
`;

export default DashboardLayout;
