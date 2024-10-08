import styled from "styled-components";
import theme from "./styles/theme";

export const DashboardLayout = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 7rem 1fr;
  grid-template-columns: 30rem 1fr;
  grid-template-areas:
    "a a a"
    "b c c";

  @media ${theme.device.tablet} {
    grid-template-columns: 16rem 1fr;
  }

  @media ${theme.device.mobile} {
    grid-template-columns: 6.1rem;
    grid-template-rows: 6rem 1fr;
  }
`;

export const HeaderLayout = styled.header`
  grid-area: a;
`;

export const SideBarLayout = styled.aside`
  grid-area: b;
  border-right: 0.1rem solid ${theme.color.gray700};
  height: 100%;
`;

export const ContentLayout = styled.main`
  position: relative;
  grid-area: c;
  min-width: 0;
  height: 100%;
`;

export default DashboardLayout;
