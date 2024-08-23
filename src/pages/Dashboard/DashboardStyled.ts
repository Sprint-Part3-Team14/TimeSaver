import styled from "styled-components";
import theme from "../../styles/theme";

export const DashboardLayout = styled.div`
  height: 100%;
  display: flex;
  background-color: ${theme.color.gray500};
  gap: 1.6rem;
  overflow: scroll;

  &::-webkit-scrollbar {
    background-color: ${theme.color.gray500};
    height: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.gray700};
    border-radius: 0.8rem;
    cursor: pointer;
  }
`;

export const AddColumnButtonStyled = `
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content : center;

  height : 5.5rem;
  border-radius : 0.8rem;
  margin : 2.3rem 0;
`;
