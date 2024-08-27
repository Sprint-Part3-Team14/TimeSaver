import { slideIn, slideOut } from "src/styles/animation";
import { ScrollCustom } from "src/styles/mixin";
import theme from "src/styles/theme";
import styled from "styled-components";

export const SidePageContainer = styled.div<{ isClose: boolean; addStyle?: string }>`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 20;
  width: 60%;
  height: 100%;
  background-color: ${theme.color.white};
  box-shadow: 0rem 2rem 2rem 0rem rgba(90, 90, 90, 0.5);

  display: grid;
  grid-template-rows: 7.1rem 1fr;
  grid-template-areas:
    "a"
    "b";
  animation: ${({ isClose }) => (isClose ? slideOut : slideIn)} 0.5s forwards;

  @media ${theme.device.tablet} {
    width: 100%;
    overflow-y: scroll;

    ${ScrollCustom};
  }

  @media ${theme.device.mobile} {
    width: 100%;
    overflow-y: scroll;

    ${ScrollCustom};
  }

  ${({ addStyle }) => addStyle}
`;

export const SidePageHeader = styled.header<{ addStyle?: string }>`
  padding: 1.5rem 2.3rem;
  box-sizing: border-box;
  grid-area: a;
  border: 0.1rem solid ${theme.color.gray600};

  display: flex;
  justify-content: space-between;
  align-items: center;

  ${({ addStyle }) => addStyle}
`;

export const SidePageBody = styled.div<{ addStyle?: string }>`
  padding: 2.3rem;
  grid-area: b;

  ${({ addStyle }) => addStyle}
`;
