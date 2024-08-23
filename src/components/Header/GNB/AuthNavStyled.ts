import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  height: 7rem;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid ${props => props.theme.color.gray300};
  background-color: ${props => props.theme.color.white};
  padding-left: 2rem;
  padding-right: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding-right: 8rem;
  }
`;

export const LogoAndTitleContainer = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  padding-left: 1rem;
  gap: 0.5rem;
  align-items: center;
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
`;

export const Logo = styled.div`
  width: 9.3rem;
  height: 4rem;
  background-image: url("/images/Main_Logo.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media (min-width: ${props => props.theme.breakpoints.mobile}) {
    gap: 2rem;
  }
`;

export const Text = styled.p`
  color: ${props => props.theme.color.black700};
  font-family: Inter;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
`;
