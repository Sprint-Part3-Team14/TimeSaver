import styled from "styled-components";
import theme from "src/styles/theme";

export const cardDetailLayout = `
display: grid;
grid-template-columns: 60% 40%;
padding : 0;
`;

export const cardContentStyle = `
  padding : 2.3rem;
  border-right : 0.1rem solid ${theme.color.gray600};
`;

export const Button = styled.button`
  position: relative;
  cursor: pointer;
`;
