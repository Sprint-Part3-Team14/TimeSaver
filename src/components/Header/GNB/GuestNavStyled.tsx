import styled from "styled-components";

export const HeaderContainer = styled.div`
  z-index: var(--z-nav);
  display: flex;
  height: 70px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 0 12px;
`;

export const LogoContainer = styled.div`
  padding: 4px;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 5px;

  @media (min-width: 768px) { /* tb breakpoint for example */
    gap: 9px;
  }
`;

export const Logo = () => (
  <img src="../../../../public/images/landing1.jpg" alt="Logo" width={121} height={39} />
);
