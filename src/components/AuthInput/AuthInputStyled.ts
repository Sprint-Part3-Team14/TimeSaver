import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 16px;
  position: relative;
`;

export const Label = styled.label`
  display: flex;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
`;

export const Input = styled.input<{ isInvalid: boolean }>`
  border: 1px solid ${({ isInvalid }) => (isInvalid ? "red" : "#cccccc")};
  outline: none;
  border-radius: 4px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

export const ErrorMessage = styled.small`
  display: flex;
  margin-top: 4px;
  font-size: 12px;
  color: red;
`;

export const ToggleButton = styled.span`
  position: absolute;
  top: 45px;
  right: 15px;
  cursor: pointer;
`;
