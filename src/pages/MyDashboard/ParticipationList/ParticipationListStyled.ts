import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1022px;
  gap: 12px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  column-gap: 12px;
  row-gap: 13px;

  :hover {
    background-color: ${({ theme }) => theme.color.gray500};
  }
`;
