import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 0 28px;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid var(--gray-gray_700, #d9d9d9);
  background: #fff;
`;

export const Input = styled.input`
  border: none;
  outline: none;
  ::placeholder {
    color: var(--gray-gray_800, #9fa6b2);
    font-family: Inter;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  :focus {
    outline: none;
  }
`;
