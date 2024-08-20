import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.6rem 1.8rem;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.color.gray900};
  font-size: 1.2rem;
  font-weight: 700;
`;

export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;
