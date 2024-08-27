import styled from "styled-components";
import { COLOR_LIST } from "src/components/Modal/CreateDashboard/ColorConstant";
import theme from "src/styles/theme";

const VIEW_COUNT = {
  MOBILE: 2,
  PC: 4,
};

const VIEW_SIZE = {
  MOBILE: "3.4rem",
  PC: "3.8rem",
};

export const MemberContainer = styled.div`
  min-width: 16rem;
  display: flex;
  justify-content: flex-start;

  @media ${theme.device.tablet} {
    min-width: 9.6rem;
  }

  @media ${theme.device.mobile} {
    min-width: 9rem;
  }
`;

export const AddProfileStyle = `
  width : ${VIEW_SIZE.PC};
  height : ${VIEW_SIZE.PC};
  border: 0.2rem solid ${theme.color.gray600};
  flex-shrink : 0;


  &:not(:last-child){
    margin-right : -1.5rem;
  }

  @media ${theme.device.tablet} {
    &:not(:nth-child(1)):not(:nth-child(2)) {
      display: none;
    }
  }

  @media ${theme.device.mobile}{
    &:not(:nth-child(1)):not(:nth-child(2)) {
        display: none;
      }

    width : ${VIEW_SIZE.MOBILE};
    height : ${VIEW_SIZE.MOBILE};

  }
`;

export const PlusMember = styled.div<{ totalCount: number }>`
  width: ${VIEW_SIZE.PC};
  height: ${VIEW_SIZE.PC};
  background-color: ${COLOR_LIST[3]};
  border-radius: 50%;
  border: 0.2rem solid ${theme.color.gray600};
  position: relative;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ totalCount }) => (totalCount > VIEW_COUNT.PC ? "" : "display : none")};

  &::after {
    content: "${({ totalCount }) => totalCount - VIEW_COUNT.PC}";
    color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
  }

  @media ${theme.device.tablet} {
    ${({ totalCount }) => (totalCount > VIEW_COUNT.MOBILE ? "" : "display : none")};
    &::after {
      content: "${({ totalCount }) => totalCount - VIEW_COUNT.MOBILE}";
    }
  }

  @media ${theme.device.mobile} {
    width: ${VIEW_SIZE.MOBILE};
    height: ${VIEW_SIZE.MOBILE};
    ${({ totalCount }) => (totalCount > VIEW_COUNT.MOBILE ? "" : "display : none")};

    &::after {
      content: "${({ totalCount }) => totalCount - VIEW_COUNT.MOBILE}";
    }
  }
`;
