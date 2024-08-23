import styled from "styled-components";

export const DashboardInfoContainer = styled.div`
  ${props => props.theme.displays.rowCenter};
  height: 3.4rem;
  gap: 0.4rem;
  border-right: 1px solid ${props => props.theme.color.gray900};
  padding-right: 0.3rem;
  color: ${props => props.theme.color.black800};

  @media ${props => props.theme.device.mobile} {
    height: 3.8rem;
    gap: 2.3rem;
    padding-right: 0.6rem;
  }

  @media ${props => props.theme.device.tablet} {
    gap: 1rem;
  }
`;
