import { CommonPadding } from "src/components/SidePage/EditDashboard/components/DashboardMember/DashboardMemberStyled";
import theme from "src/styles/theme";
import styled from "styled-components";

export const Title = styled.h1`
  color: ${theme.color.black600};
`;

export const MenuContainer = styled.div`
  ${CommonPadding}
  padding: 3.5rem;

  display: flex;
  flex-direction: column;
  gap: 6rem;
`;
