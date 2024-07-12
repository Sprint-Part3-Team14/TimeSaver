import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 26px 18px;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.gray900};
  font-size: 12px;
  font-weight: 700;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;
