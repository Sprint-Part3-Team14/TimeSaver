import styled from "styled-components";
import { AfterCrownIcon } from "src/styles/mixin";
import theme from "src/styles/theme";
import { SideBarLayout } from "src/DashboardLayoutStyled";

export const SideBarContainer = styled(SideBarLayout)``;

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.a<{ createdByMe: boolean; color: string }>`
  text-decoration: none;
  padding: 1rem 2.4rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;

  &::before {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 1.5rem;
  }

  ${({ createdByMe }) => (createdByMe ? AfterCrownIcon : "")}

  &:hover {
    background-color: ${({ theme }) => theme.color.gray500};
  }

  @media ${theme.device.tablet} {
    &::after {
      display: none;
    }
  }
`;

export const TitleText = styled.p`
  color: ${theme.color.gray900};
  font-size: 1.8rem;
  font-weight: 500;
  max-width: 20rem;
  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: auto;

  @media ${theme.device.tablet} {
    max-width: 9rem;
  }
`;
