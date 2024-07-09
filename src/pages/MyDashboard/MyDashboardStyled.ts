import styled from "styled-components";

export const Layout = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.gray500};
  padding: 38px 40px;
  gap: 44px;
`;
