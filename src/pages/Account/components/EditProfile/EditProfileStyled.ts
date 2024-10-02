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

export const FormLayout = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const TitleStyle = styled.h2`
  color: ${theme.color.black700};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const InputLabel = styled.label`
  color: ${theme.color.black700};
  font-size: 1.8rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const InputStyle = styled.input`
  border-radius: 0.6rem;
  border: 0.1rem solid ${theme.color.gray700};
  padding: 1.5rem;
  font-size: 1.6rem;
  outline-color: ${theme.color.pink400};

  &:placeholder {
    color: v ${theme.color.gray800};
  }
`;

export const AddButtonStyle = `
  margin-top : -1.5rem;
`;
