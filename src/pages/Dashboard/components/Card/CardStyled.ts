import theme from "src/styles/theme";
import styled from "styled-components";

export const CardLayout = styled.div`
  background-color: ${theme.color.white};
  padding: 2rem;
  cursor: pointer;
  border-radius: 0.8rem;
  display: grid;
  grid-template-areas:
    "a a"
    "b b"
    "c c"
    "d e";
  gap: 1rem;

  transition:
    transform 0.1s ease-in-out,
    box-shadow 0.1s ease-in-out;

  &:hover {
    box-shadow: 0.2rem 0.2rem 0.8rem 0rem rgba(80, 80, 80, 0.5);
    transform: scale(1.01);
  }

  @media ${theme.device.tablet} {
    grid-template-columns: 10rem 1fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas:
      "a b b b"
      "a c d e";
    align-items: center;
    row-gap: 0;
  }
`;

export const CardThumbnail = styled.img`
  aspect-ratio: 1.7 / 1;
  width: 100%;
  object-fit: cover;
  grid-area: a;
`;

export const CardTitle = styled.h3`
  color: ${theme.color.black700};
  font-weight: 500;
  font-size: 1.6rem;
  grid-area: b;
`;

export const CardTagList = styled.div`
  display: flex;
  gap: 1rem;
  grid-area: c;
  flex-wrap: wrap;
  max-height: 5.4rem;
  overflow: hidden;

  @media ${theme.device.tablet} {
    margin-top: auto;
  }
`;

export const Tag = styled.div`
  padding: 0.4rem 0.6rem;
  background-color: ${theme.color.pink400};
  border-radius: 0.4rem;
`;

export const CardCreatedAt = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  color: ${theme.color.gray900};
  font-size: 1.2rem;
  font-weight: 500;
  grid-area: d;
`;

export const CardWriterImage = styled.img`
  border-radius: 50%;
  width: 2.4rem;
  height: 2.4rem;
  grid-area: e;
`;

export const ImagePosition = `
  margin-left : auto;
  border: 0.1rem solid ${theme.color.gray700};
`;
