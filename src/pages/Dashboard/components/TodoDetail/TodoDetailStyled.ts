import theme from "src/styles/theme";
import styled from "styled-components";

export const DetailContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 20;
  width: 50%;
  height: 100%;
  background-color: ${theme.color.white};
  box-shadow: 0px 8rem 2rem 0px rgba(90, 90, 90, 0.5);
`;

export const DetailHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3.5rem;
`;

export const DetailMain = styled.div`
  background-color: #fff;
  padding: 1.7rem 3.5rem;
`;
