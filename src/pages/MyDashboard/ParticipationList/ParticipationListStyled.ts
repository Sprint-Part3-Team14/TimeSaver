import styled from "styled-components";
import theme from "src/styles/theme";

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 102.2rem;
  gap: 1.2rem;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 1.2rem;
  row-gap: 1.3rem;

  &:hover {
    background-color: ${theme.color.gray500};
  }
`;
