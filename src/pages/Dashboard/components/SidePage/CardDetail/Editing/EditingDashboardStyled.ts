import theme from "src/styles/theme";
import styled from "styled-components";

export const EditingContainer = styled.div`
  background-color: ${theme.color.white};
  border-radius: 0.6rem;
  border: 0.1rem solid ${theme.color.gray700};
  box-shadow: 0rem 0.4rem 2rem 0rem rgba(0, 0, 0, 0.08);
  padding: 0.6rem;
  width: max-content;

  position: absolute;
  top: 1.2rem;
  right: 0.8rem;
  z-index: 30;
`;

export const EditingButton = styled.button`
  border-radius: 0.4rem;
  text-align: center;
  font-size: 1.4rem;
  line-height: 2.4rem;
  padding: 0.4rem 1.2rem;
  display: block;

  &:hover {
    color: ${theme.color.blue400};
    background-color: ${theme.color.gray600};
  }
`;
