import styled from "styled-components";
import theme from "../../styles/theme";

export const Column = styled.div`
  width: 35rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  border-right: 2px solid ${theme.color.gray600};
`;

export const DashboardLayout = styled.div`
  height: 100%;
  display: flex;
  background-color: ${theme.color.gray500};
  gap: 1.6rem;
`;
