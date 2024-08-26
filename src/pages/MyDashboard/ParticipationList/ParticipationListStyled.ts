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
  grid-template-columns: repeat(3, max(calc((100% / 3) - 0.6rem)));
  grid-template-rows: repeat(2, 1fr);
  column-gap: 1.2rem;
  row-gap: 1.3rem;

  &:hover {
    background-color: ${theme.color.gray500};
  }

  @media ${theme.device.tablet} {
    grid-template-columns: repeat(2, max(calc((100% / 2) - 0.6rem)));
    grid-template-rows: repeat(3, 1fr);
  }

  @media ${theme.device.mobile} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
  }
`;

export const ButtonPosition = `
  margin-left : auto;
`;
