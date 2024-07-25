import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  color: #333333;
`;

export const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #cccccc;
  border-radius: 4px;
  background-color: #ffffff;
  color: #333333;
  transition: border-color 0.3s;

  &:hover {
    border-color: #007bff;
  }

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;
