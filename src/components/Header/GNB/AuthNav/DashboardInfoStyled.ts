import theme from "src/styles/theme";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const DashboardInfoContainer = styled.div`
  ${theme.displays.rowCenter};
  height: 3.4rem;
  gap: 1rem;
  border-right: 1px solid ${theme.color.gray900};
  padding-right: 0.3rem;
  color: ${theme.color.black800};

  @media ${theme.device.mobile} {
    height: 3.8rem;
    gap: 2.3rem;
    padding-right: 0.6rem;
  }

  @media ${theme.device.tablet} {
    gap: 1.5rem;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;

export const CustomButton = styled.button`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 0.5rem;
  background: none;
  border: 0.1rem solid ${theme.color.gray700};
  padding: 0.6rem 1rem;
  border-radius: 8px;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 18px;
  height: 18px;
  vertical-align: middle;
`;

export const ButtonText = styled.span`
  vertical-align: middle;
  font-size: 1.2rem;
  text-decoration: none;
  color: ${theme.color.black800};
`;
