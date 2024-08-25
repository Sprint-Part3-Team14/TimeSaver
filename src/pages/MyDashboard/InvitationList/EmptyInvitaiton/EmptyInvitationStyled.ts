import theme from "src/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 6.6rem 0;
`;

export const Text = styled.p`
  padding-top: 2.4rem;

  color: ${theme.color.gray800};
  text-align: center;
  font-size: 1.8rem;
`;
