import { HeaderContainer } from "src/components/Header/HeaderCommonStyle";
import styled from "styled-components";

export const HeaderBox = styled(HeaderContainer)`
  ${({ isLanding }) =>
    isLanding
      ? `
    display : flex;
    justify-content : space-between;
  `
      : ""}
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
