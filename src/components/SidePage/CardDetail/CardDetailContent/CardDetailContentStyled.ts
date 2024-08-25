import styled from "styled-components";
import theme from "src/styles/theme";
import { Container as TagBox } from "src/pages/Dashboard/components/CreateCard/AddTag/AddTagStyled";

export const Container = styled.div<{ addStyle?: string }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  ${({ addStyle }) => (addStyle ? addStyle : "")}
`;

export const Header = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
export const Title = styled.h1`
  color: ${theme.color.black700};
  font-size: 2.4rem;
  font-weight: 700;
  padding: 1rem 0;
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
  width: 100%;
  height: 30rem;
  object-fit: cover;
  min-width: 0;
  border-radius: 0.6rem;
`;

export const ContentText = styled.p`
  color: ${theme.color.black900};
  font-size: 1.4rem;
  line-height: 2.4rem;
`;

export const TagSection = styled(TagBox)`
  border-box: box-sizing;
  margin: auto 0 0 0;
`;
