import theme from "src/styles/theme";
import styled from "styled-components";

export const DashboardInfoContainer = styled.div`
  ${theme.displays.rowCenter};
  height: 3.4rem;
  gap: 5rem;
  color: ${theme.color.black800};

  @media ${theme.device.mobile} {
    height: 3.8rem;
    gap: 1rem;
  }

  @media ${theme.device.tablet} {
    gap: 1.5rem;
  }
`;

export const CustomButton = `
  display: flex;
  justify-content : center;
  align-items: center;
  gap: 0.5rem;
  padding : 0.8rem;
  width : fit-content;

  @media ${theme.device.mobile} {
    height: 1.8rem;
    font-size : 1.3rem;
    padding : 0.8rem 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const ButtonIcon = `
  @media ${theme.device.mobile}{
    display : none;
  }
`;
