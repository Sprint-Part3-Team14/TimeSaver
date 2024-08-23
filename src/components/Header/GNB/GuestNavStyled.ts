import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom: 0.1rem solid #d9d9d9;
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const Logo = styled.div`
  width: 9.3rem;
  height: 4rem;
  background-image: url("/images/Main_Logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
