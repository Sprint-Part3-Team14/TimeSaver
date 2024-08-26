import { Title, TitleText } from "src/components/Sidebar/SidebarStyled";
import theme from "src/styles/theme";
import styled from "styled-components";

export const TitleButton = styled(Title)`
  border: 0.1rem solid ${theme.color.gray700};
  border-radius: 0.8rem;
  background-color: ${theme.color.white};
  flex-shrink: 1;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;

  @media ${theme.device.tablet} {
    &::after {
      display: inline-block;
    }
  }
`;

export const TitleStyle = styled(TitleText)`
  color: ${theme.color.black700};
  min-width: auto;
  max-width: calc(100% - 10rem);

  @media ${theme.device.tablet} {
    max-width: 70%;
  }
`;
