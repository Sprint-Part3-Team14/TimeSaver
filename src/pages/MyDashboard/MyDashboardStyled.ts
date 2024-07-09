import styled from "styled-components";

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  gap: 44px;
  height: 100vh;
  padding: 38px 40px;
  background-color: ${({ theme }) => theme.color.gray500};
`;
