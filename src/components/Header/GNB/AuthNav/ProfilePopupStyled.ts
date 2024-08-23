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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  height: 6rem;
  width: 10rem;
  border-radius: 8px;
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
