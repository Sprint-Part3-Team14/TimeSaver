import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "src/styles/theme";

export const ProfileInfoContainer = styled.div`
  ${theme.displays.rowCenter};
  position: relative;
  gap: 1rem;

  &:hover .profile-popup {
    display: block;
  }
`;

export const ProfileLink = styled(Link)`
  ${theme.displays.rowCenter};
  gap: 1rem;
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

export const NicknameText = styled.div`
  color: ${theme.color.black700};
  font-family: Inter;
  font-size: ${theme.fontSize.large};
  font-weight: 500;

  @media ${theme.device.mobile} {
    display: none;
  }
`;
