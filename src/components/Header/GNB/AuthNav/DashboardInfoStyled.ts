import theme from "src/styles/theme";
import styled from "styled-components";

export const DashboardInfoContainer = styled.div`
  ${theme.displays.rowCenter};
  height: 3.4rem;
  gap: 0.4rem;
  border-right: 1px solid ${theme.color.gray900};
  padding-right: 0.3rem;
  color: ${theme.color.black800};

  @media ${theme.device.mobile} {
    height: 3.8rem;
    gap: 2.3rem;
    padding-right: 0.6rem;
  }

  @media ${theme.device.tablet} {
    gap: 1rem;
  }
`;
