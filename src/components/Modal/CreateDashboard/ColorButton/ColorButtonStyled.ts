import styled from "styled-components";

export const ColorButton = styled.button<{ color: string }>`
  position: relative;
  background-color: ${({ color }) => color};
  border-radius: 50%;
  width: 100%;
  height: 100%;
`;

export const ButtonBox = styled.div`
  position: relative;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;

export const CheckIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 40;
`;
