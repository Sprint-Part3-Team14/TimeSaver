import theme from "src/styles/theme";
import styled from "styled-components";

export const DetailContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  width: 70%;
  height: 100%;
  background-color: ${theme.color.white};
  box-shadow: 0rem 2rem 2rem 0rem rgba(90, 90, 90, 0.5);
  display: grid;
  grid-template-columns: 1fr 34rem;
  grid-template-rows: 7.1rem 1fr;
  grid-template-areas:
    "a a"
    "b c";
`;

export const DetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2.3rem;
  grid-area: a;
  box-sizing: border-box;
  border-bottom: 1px solid ${theme.color.gray600};
`;

export const DetailContent = styled.div`
  padding: 2.3rem;
  border-right: solid 0.1rem ${theme.color.gray600};
  grid-area: b;
`;

export const DetailComments = styled.div`
  padding: 2.3rem;
  grid-area: c;
`;
