import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileInfoContainer = styled.div`
  ${props => props.theme.displays.rowCenter};
  position: relative;
  gap: 1rem;

  &:hover .profile-popup {
    display: block;
  }
`;

export const ProfileLink = styled(Link)`
  ${props => props.theme.displays.rowCenter};
  gap: 6rem;
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

export const NicknameText = styled.div`
  color: ${props => props.theme.color.black700};
  font-family: Inter;
  font-size: ${props => props.theme.fontSize.large};
  font-weight: 500;
`;
