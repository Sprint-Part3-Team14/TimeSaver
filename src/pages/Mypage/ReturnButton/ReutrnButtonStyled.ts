import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  cursor: pointer;
`;

export const Text = styled.div`
  color: ${({ theme }) => theme.color.black700};
  font-size: 16px;
  font-weight: 500;
`;
