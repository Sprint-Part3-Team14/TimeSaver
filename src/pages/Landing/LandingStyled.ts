import theme from "src/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 7rem 1fr;
  grid-template-areas:
    "a"
    "b";
  row-gap: 10rem;
`;

export const HeroContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const BodyContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 15rem;
  margin: 0 auto;
  padding-bottom: 10rem;
`;

export const HeroText = styled.h1`
  color: ${theme.color.black900};
  text-align: center;
  font-size: 7rem;
  font-weight: 700;
  line-height: 9.5rem;
`;

export const SubText = styled.h2`
  color: ${theme.color.gray900};
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;
`;

export const Section = styled.div`
  display: flex;
  gap: 8rem;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }
`;

export const SectionImg = styled.img`
  width: 45rem;
`;

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled.h3`
  color: ${theme.color.black700};
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;
`;

export const SectionSubTitle = styled.p`
  color: ${theme.color.gray900};
  font-size: 2rem;
  font-weight: 400;

  &:nth-child(even) {
    text-align: right;
  }
`;

export const ButtonStyle = `
  padding : 1.5rem;
  font-weight : 500;
  width : 12rem;
  border-radius : 50rem;
`;
