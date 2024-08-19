import theme from "src/styles/theme";
import styled from "styled-components";

export const ThumbNailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30.5rem;
  border: 0.1rem solid ${theme.color.gray700};
  border-radius: 0.6rem;
  background-color: ${theme.color.gray700};
`;

export const InputImage = styled.input`
  display: none;
`;

export const ThumbNailImage = styled.img`
  min-width: 0;
  width: 100%;
  height: 30.5rem;
  object-fit: cover;
  border-radius: 0.6rem;
  background-color: ${theme.color.gray700};
`;

export const InputImageLabel = styled.label`
  color: ${theme.color.gray900};
  text-align: center;
  font-size: 1rem;
  font-weight: 500;

  padding: 0.8rem 1.5rem;
  border-radius: 0.6rem;
  border: 0.1rem solid ${theme.color.gray800};
  background-color: ${theme.color.white};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:hover {
    box-shadow: 0 0 0.8rem 0 rgba(0, 0, 0, 0.12);
  }

  &:active {
    background-color: ${theme.color.gray600};
  }
`;
