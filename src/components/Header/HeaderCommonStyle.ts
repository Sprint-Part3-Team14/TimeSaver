import { Link } from "react-router-dom";
import { HeaderLayout } from "src/DashboardLayoutStyled";
import theme from "src/styles/theme";
import styled from "styled-components";

export const HeaderContainer = styled(HeaderLayout)<{ isLanding: boolean }>`
  height: 100%;
  top: 0;
  z-index: 10;
  position: sticky;
  display: grid;
  grid-template-columns: 28rem 1fr;
  grid-template-areas: "a b";
  align-items: center;
  border-bottom: 0.1rem solid ${theme.color.gray700};
  background-color: ${theme.color.white};
  padding: 0 2rem;

  ${({ isLanding }) =>
    isLanding
      ? `
    grid-area : "a";
    `
      : ""}

  @media ${theme.device.tablet} {
    grid-template-columns: 14rem 1fr;
  }

  @media ${theme.device.mobile} {
    grid-template-columns: 5rem 1fr;
    padding: 0 1rem;
  }
`;

export const LinkStyle = styled(Link)`
  grid-area: "a";
`;

export const Logo = styled.div`
  width: 9.3rem;
  height: 4rem;
  background-image: url("/images/Main_Logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @media ${theme.device.mobile} {
    background-image: url("/images/Logo_small.png");
    width: 4rem;
  }
`;
