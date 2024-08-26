import styled from "styled-components";
import theme from "src/styles/theme";
import { Title, TitleText } from "src/components/Sidebar/SidebarStyled";

export const TitleButton = styled(Title)`
  border: 0.1rem solid ${theme.color.gray700};
  border-radius: 0.8rem;
  background-color: ${theme.color.white};
  padding: 2.5rem;

  &:hover {
    background-color: ${theme.color.gray500};
  }

  @media ${theme.device.tablet} {
    &::after {
      display: block;
    }
  }
`;

export const TitleStyle = styled(TitleText)`
  color: ${theme.color.black700};
  font-weight: 600;
  font-size: 1.6rem;
  max-width: auto;

  @media ${theme.device.tablet} {
    max-width: auto;
  }

  @media ${theme.device.mobile} {
    max-width: 14.4rem;
  }
`;
