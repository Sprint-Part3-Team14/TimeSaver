import theme from "src/styles/theme";
import styled from "styled-components";

export const CardLayout = styled.div`
  background-color: ${theme.color.white};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  cursor: pointer;
  border-radius: 0.8rem;
  transition:
    transform 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out;

  &:hover {
    box-shadow: 0.2rem 0.2rem 0.8rem 0rem rgba(80, 80, 80, 0.5);
    transform: scale(1.01);
  }
`;

export const CardThumbnail = styled.img`
  aspect-ratio: 1.7 / 1;
  object-fit: cover;
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

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardCreatedAt = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  color: ${theme.color.gray900};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const CardWriterImage = styled.img`
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
`;
