import theme from "src/styles/theme";
import styled from "styled-components";

export const PopupButtonContainer = styled.div`
  background-color: ${theme.color.white};
  border-radius: 0.8rem;
  box-shadow: 0px 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
  border: 0.1rem solid ${theme.color.gray600};

  display: flex;
  flex-direction: column;

  position: absolute;
  top: 6rem;

  @media ${theme.device.mobile} {
    right: 2rem;
    top: 4rem;
  }
`;

export const ButtonStyle = `
  background-color : ${theme.color.white};
  color : ${theme.color.black700};
  border : none;
  padding : 1.5rem;
  width : 9rem;
`;

// ㅗㅗㅗㅗ

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
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
