import theme from "src/styles/theme";
import styled from "styled-components";

export const CardLayout = styled.div`
  margin-top: 1.6rem;
  background-color: ${theme.color.white};
  border-radius: 0.6rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CardTitle = styled.h3`
  color: ${theme.color.black700}
  font-weight: 500;
  font-size : 1.6rem;
`;

export const CardTagList = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Tag = styled.div`
  padding: 0.4rem 0.6rem;
  background-color: ${theme.color.pink400};
  border-radius: 0.4rem;
`;

export const CardCreatedAt = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  color: ${theme.color.gray900};
  font-size: 1.2rem;
  font-weight: 500;
`;
