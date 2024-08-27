import theme from "src/styles/theme";
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  height: 100%;
`;

export const Background = styled.body`
  width: 100vw;
  height: 100vh;
  background-image: url("/images/404 background.png");
  background-size: cover;
  background-position: center;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: ${theme.color.white};
  text-align: center;
  font-size: 5rem;
  font-weight: 900;
`;

export const AddButtonStyle = `
  width : 12rem;
  padding : 1.5rem;
  border-radius: 0.8rem;
`;
