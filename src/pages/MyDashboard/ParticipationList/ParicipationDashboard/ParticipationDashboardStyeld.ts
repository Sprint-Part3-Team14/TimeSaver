import theme from "src/styles/theme";
import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 33.2rem;
  padding: 2.5rem 2rem;
  cursor: pointer;
  gap: 0.3rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${theme.color.gray700};
  background-color: ${theme.color.white};
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
`;

export const Title = styled.h2`
  color: ${theme.color.black700};
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
`;
