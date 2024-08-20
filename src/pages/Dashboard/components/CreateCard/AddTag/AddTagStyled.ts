import theme from "src/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h1`
  color: ${theme.color.black700};
  font-size: 1.6rem;
  font-weight: 600;
`;

export const TagInput = styled.input`
  border: 0.1rem solid ${theme.color.gray600};
  border-radius: 0.6rem;
  padding: 1rem 1.5rem;
  outline-color: ${theme.color.pink400};

  &:placeholder {
    color: ${theme.color.gray600};
  }
`;

export const TagContainer = styled.div`
  min-height: 2.2rem;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  gap: 1rem;
  text-align: center;
  max-width: 100%;

  &::-webkit-scrollbar {
    display: none;
  }
`;
