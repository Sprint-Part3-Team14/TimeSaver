import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  margin: 0 28px;
  gap: 8px;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.color.gray700};
  background: ${({ theme }) => theme.color.white};
`;

export const Input = styled.input`
  border: none;
  outline: none;
  ::placeholder {
    color: ${({ theme }) => theme.color.gray800};
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
