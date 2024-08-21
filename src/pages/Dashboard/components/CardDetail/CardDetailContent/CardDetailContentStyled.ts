import styled from "styled-components";
import theme from "src/styles/theme";

export const Header = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export const Title = styled.h1`
  color: ${theme.color.black700};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const Assignee = styled.div`
  margin-left: auto;
`;

export const CreatedDate = styled.div`
  color: ${theme.color.black600};
  font-size: 1.4rem;
  margin: 0.9rem 0 2rem;
`;

export const ThumbnailImage = styled.img`
  height: 30rem;
  object-fit: cover;
  min-width: 0;
`;

export const ContentText = styled.p`
  color: ${theme.color.black900};
  font-size: 1.4rem;
  line-height: 2.4rem;
`;
