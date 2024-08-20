import styled from "styled-components";
import theme from "../../styles/theme";

export const DashboardLayout = styled.div`
  height: 100%;
  display: flex;
  background-color: ${theme.color.gray500};
  gap: 1.6rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
