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
  border-bottom: 1px solid var(--tp-gray-300);
  background-color: white;
  padding-left: 24px;
  padding-right: 12px;

  @media (min-width: 768px)
    height: 70px;
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (min-width: 1024px)
    flex-direction: row;
    padding-right: 80px;
  }
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


export const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: normal;
  gap: 0.75rem;

  @media (min-width: 768px)
    gap: 2rem;
  }
`;

export const Text = styled.p`
  padding-top: 24px;

  color: black900;
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
