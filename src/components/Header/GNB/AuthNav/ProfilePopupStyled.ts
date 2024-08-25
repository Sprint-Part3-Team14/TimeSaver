import theme from "src/styles/theme";
import styled from "styled-components";

export const ProfilePopupContainer = styled.div`
  position: absolute;
  left: 3rem;
  top: 3rem;
  display: none;
  background-color: transparent;
  padding-top: 1rem;
`;

export const PopupContent = styled.div`
  display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
  overflow: hidden;
  height: 6rem;
  width: 10rem;
  border-radius: 0.8rem;
  background-color: ${theme.color.white};
  box-shadow: 0px 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
`;

export const ProfilePopupButton = styled.button`
  ${theme.displays.rowCenter};
  font-size: ${theme.fontSize.normal};
  font-weight: bold;
  height: 5rem;
  width: 100%;

  &:hover {
    background-color: ${theme.color.gray600};
    color: ${theme.color.black800};
  }
`;
