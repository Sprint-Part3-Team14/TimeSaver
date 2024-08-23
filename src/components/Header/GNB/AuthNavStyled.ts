import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  height: 70px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1rem solid #d9d9d9;
  background-color: white;
  padding-left: 2rem;
  padding-right: 1.2rem;

  @media (max-width: 768px) {
    height: 70px;
    padding-left: 4rem;
    padding-right: 4rem;
  }

  @media (min-width: 1024px) {
    flex-direction: row;
    padding-right: 80px;
  }
`;

export const LogoAndTitleContainer = styled.div`
  width: 35%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  font-size: 1.25rem;
  font-weight: bold;
  padding-left: 1rem;
  padding-top: 0.25rem;
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
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: normal;
  gap: 0.75rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

export const Text = styled.p`
  color: black900;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
