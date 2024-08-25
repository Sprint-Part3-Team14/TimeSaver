import styled from "styled-components";
import theme from "src/styles/theme";

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4.4rem;
  height: 100vh;
  padding: 3.8rem 4rem;
  background-color: ${theme.color.gray500};
`;
