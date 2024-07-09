import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 332px;
  padding: 25.5px 0;
  cursor: pointer;
  gap: 3px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.gray700};

  background-color: ${({ theme }) => theme.color.white};
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.color.black700};
  text-align: center;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
