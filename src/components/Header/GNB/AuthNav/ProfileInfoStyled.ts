import styled from "styled-components";
import { Link } from "react-router-dom";

export const ProfileInfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 3px;
  &:hover .profile-popup {
    display: block;
  }
`;

export const ProfileLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3px;
`;
