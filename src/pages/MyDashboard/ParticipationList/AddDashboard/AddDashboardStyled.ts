import styled from "styled-components";
import theme from "src/styles/theme";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 33.2rem;
  padding: 2.5rem 0;
  cursor: pointer;
  gap: 0.3rem;
  border-radius: 0.8rem;
  border: 1px solid ${theme.color.gray700};

  background-color: ${theme.color.white};
`;

export const Title = styled.h2`
  color: ${theme.color.black700};
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
`;
