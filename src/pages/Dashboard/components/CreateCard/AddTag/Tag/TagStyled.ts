import styled from "styled-components";

export const Container = styled.div<{ textColor: string }>`
  background-color: #fffaf5;
  color: ${({ textColor }) => textColor};
  border: 0.1rem solid ${({ textColor }) => textColor};
  border-radius: 0.4rem;
  padding: 0.4rem 0.6rem;
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
`;

export const DeleteButton = styled.button<{ textColor: string }>`
  width: 1.2rem;
  height: 1.2rem;
  background-color: ${({ textColor }) => textColor};
  border-radius: 50%;
  cursor: pointer;
`;
