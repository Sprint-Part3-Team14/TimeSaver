import styled from "styled-components";
import theme from "src/styles/theme";
import { ScrollCustom } from "src/styles/mixin";

export const DashboardLayout = styled.div`
  height: 100%;
  display: flex;
  background-color: ${theme.color.gray500};
  gap: 1.6rem;
  overflow: scroll;

  ${ScrollCustom}

  @media ${theme.device.tablet} {
    flex-direction: column;
    width: 100%;
    height: auto;
    overflow: visible;
  }

  @media ${theme.device.mobile} {
    flex-direction: column;
    width: 100%;
    height: auto;
    overflow: visible;
  }
`;

export const AddColumnButtonStyled = `
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content : center;
  min-width : 30rem;
  max-width : 30rem;
  height : 5.5rem;
  border-radius : 0.8rem;
  margin : 2.3rem ;

  @media ${theme.device.tablet}{
    max-width : calc(100% - 5rem);
  }

  @media ${theme.device.mobile}{
    max-width : calc(100% - 5rem);
  }
`;
