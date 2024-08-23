import styled from "styled-components";

export const ProfilePopupContainer = styled.div`
  position: absolute;
  left: 4.3rem;
  top: 3rem;
  display: none;
  background-color: transparent;
  padding-top: 1rem;
`;

export const PopupContent = styled.div`
  ${props => props.theme.displays.columnCenter};
  overflow: hidden;
  height: 6rem;
  width: 10rem;
  border-radius: 0.8rem;
  background-color: ${props => props.theme.color.white};
  box-shadow: 0px 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
`;

export const ProfilePopupButton = styled.button`
  ${props => props.theme.displays.rowCenter};
  font-size: ${props => props.theme.fontSize.normal};
  font-weight: bold;
  height: 5rem;
  width: 100%;

  &:hover {
    background-color: ${props => props.theme.color.gray600};
    color: ${props => props.theme.color.black800};
  }
`;
