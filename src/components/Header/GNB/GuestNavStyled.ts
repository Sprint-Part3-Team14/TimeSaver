import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "src/styles/theme";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 7rem;
  ${theme.displays.spaceBetween};
  border-bottom: 0.1rem solid ${theme.color.gray700};
  margin: 0 2rem;
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

export const Logo = styled.div`
  width: 9.3rem;
  height: 4rem;
  padding-left: 2rem;
  background-image: url("/images/Main_Logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;
