import theme from "src/styles/theme";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  height: 7rem;
  width: 100%;
  ${props => props.theme.displays.spaceBetween};
  border-bottom: 0.1rem solid ${theme.color.gray700};
  background-color: ${theme.color.white};
  margin: 0 2rem;

  @media ${theme.device.mobile} {
  }

  @media ${theme.device.tablet} {
  }
`;

export const LogoAndTitleContainer = styled.div`
  width: 80%;
  ${theme.displays.spaceBetween};
`;

export const TitleContainer = styled.div`
  display: flex;
  font-size: ${theme.fontSize.large};
  font-weight: bold;
  padding-left: 1rem;
  align-items: center;
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
  cursor: pointer;
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

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  @media ${theme.device.mobile} {
    gap: 2rem;
  }
`;

export const Text = styled.p`
  color: ${theme.color.black700};
  font-family: Inter;
  font-size: ${theme.fontSize.large};
  font-weight: 700;
  line-height: 1.5;
  text-align: center;
`;

export const Crown = styled.div<{ createdByMe: boolean }>`
  font-size: 1.6rem;
  font-weight: bold;
  position: relative;
  padding-left: ${({ createdByMe }) => (createdByMe ? "2.5rem" : "0")}; // 왕관 위치를 고려한 padding

  ${({ createdByMe }) =>
    createdByMe &&
    `
      &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 1.7rem;
        height: 1.4rem;
        background-image: url("/images/Icons/crown.svg");
        background-size: cover;
      }
    `}
`;
