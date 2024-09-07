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

export const ButtonStyle = `
  padding : 1.2rem 1.5rem;
  border-radius : 0.6rem;
  width : fit-content;
`;
