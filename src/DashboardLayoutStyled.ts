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
  padding: 20px;
`;

export const SideBarLayout = styled.aside`
  grid-area: b;
  background-color: yellow;
  padding: 20px;
`;

export const ContentLayout = styled.main`
  grid-area: c;
  min-width: 0;
`;

export default DashboardLayout;
