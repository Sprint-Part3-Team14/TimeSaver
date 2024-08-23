import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 10px;
  &:hover .profile-popup {
    display: block;
  }
`;

export const ProfileLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
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
  color: var(--black-black_700, #333236);
  font-family: Inter;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
