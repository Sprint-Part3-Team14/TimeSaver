import { HeaderLayout } from "src/DashboardLayoutStyled";
import { BeforeCrownIcon } from "src/styles/mixin";
import theme from "src/styles/theme";
import styled from "styled-components";

export const HeaderContainer = styled(HeaderLayout)`
  height: 100%;
  top: 0;
  z-index: 10;
  position: sticky;
  display: grid;
  grid-template-columns: 28rem 1fr;
  align-items: center;
  border-bottom: 0.1rem solid ${theme.color.gray700};
  background-color: ${theme.color.white};
  padding: 0 2rem;

  @media ${theme.device.tablet} {
    grid-template-columns: 14rem 1fr;
  }

  @media ${theme.device.mobile} {
    grid-template-columns: 5rem 1fr;
    padding: 0 1rem;
  }
`;

export const LogoAndTitleContainer = styled.div`
  padding-left: 2rem;
  ${theme.displays.spaceBetween};
`;

export const LogoContainer = styled.div`
  flex-shrink: 0;
  cursor: pointer;
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

export const NavLinks = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  @media ${theme.device.mobile} {
    gap: 1rem;
    justify-content: space-between;
  }
`;

export const Text = styled.p`
  color: ${theme.color.black700};
  font-family: Inter;
  font-size: ${theme.fontSize.large};
  font-weight: 700;
  line-height: 1.5;
  text-align: center;

  @media ${theme.device.mobile} {
    font-size: ${theme.fontSize.small};
  }
`;

export const DashboardTitle = styled.div<{ createdByMe: boolean }>`
  display: flex;
  font-size: ${theme.fontSize.large};
  font-weight: bold;
  align-items: center;

  display: flex;
  gap: 1rem;
  font-size: 1.6rem;
  font-weight: bold;
  position: relative;

  ${({ createdByMe }) => createdByMe && BeforeCrownIcon};

  @media ${theme.device.mobile} {
    display: none;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  border-left: 0.18rem solid ${theme.color.gray700};
  padding-left: 2rem;
`;

export const AddProfileImageStyle = `
  width : 3.8rem;
  height : 3.8rem;'

  @media ${theme.device.mobile}{
    width : 3.4rem;
    height : 3.4rem;
  }
`;

export const ProfileTextStyle = styled.p`
  color: ${theme.color.black700};
  font-size: 1.7rem;
  font-weight: 600;

  @media ${theme.device.mobile} {
    display: none;
  }
`;
