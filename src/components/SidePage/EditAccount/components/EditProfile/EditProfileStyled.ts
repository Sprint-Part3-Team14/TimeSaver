import styled from "styled-components";
import theme from "src/styles/theme";

export const ImageLabel = styled.label`
  text-align: center;
  position: relative;
  width: fit-content;
  margin: 0 auto;
  cursor: pointer;
`;

export const IconBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ImageButton = styled.img`
  border-radius: 50%;
  background-color: ${theme.color.gray600};
  width: 22rem;
  height: 22rem;
`;

export const ImageInput = styled.input`
  display: none;
`;

export const UserEmailStyle = styled.p`
  color: ${theme.color.gray700};
  font-size: 1.8rem;
  font-weight: 500;
  text-align: center;
  margin-top: -1.5rem;
`;

export const ImageOverlay = styled(ImageButton)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${theme.color.black800};
  opacity: 0.8;
  z-index: -1;
`;
