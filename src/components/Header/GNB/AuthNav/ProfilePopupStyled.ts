import styled from "styled-components";

export const ProfilePopupContainer = styled.div`
  position: absolute;
  left: 2rem;
  top: 3rem;
  display: none;
  background-color: transparent;
  padding-top: 5px;
`;

export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: 100px;
  width: 130px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ProfilePopupButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  height: 50px;
  width: 100%;
  &:hover {
    background-color: #e5e7eb;
    color: #1f2937;
  }
`;
