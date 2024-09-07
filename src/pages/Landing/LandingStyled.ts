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

  @media ${theme.device.mobile} {
    padding: 3rem 3rem 10rem;
    gap: 10rem;
  }
`;

export const HeroText = styled.h1`
  background: linear-gradient(90deg, #ff416e 0%, #ffa723 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-align: center;
  font-size: 7rem;
  font-weight: 700;
  line-height: 9.5rem;
  width: 60rem;

  @media ${theme.device.mobile} {
    font-size: 5rem;
    line-height: 6rem;
    width: fit-content;
  }
`;

export const SubText = styled.h2`
  color: ${theme.color.gray900};
  text-align: center;
  font-size: 2.5rem;
  font-weight: 500;

  @media ${theme.device.mobile} {
    line-height: 2.3rem;
    font-size: 2rem;
  }
`;

export const Section = styled.div`
  display: flex;
  gap: 8rem;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row-reverse;
  }

  @media ${theme.device.mobile} {
    flex-direction: column;
    gap: 2rem;

    &:nth-child(odd) {
      flex-direction: column;
    }
  }
`;

export const SectionImg = styled.img`
  width: 45rem;

  @media ${theme.device.tablet} {
    width: 30rem;
  }
`;

export const SectionDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SectionTitle = styled.h3<{ isOdd: boolean }>`
  color: ${theme.color.black700};
  font-size: 3rem;
  font-weight: 700;
  line-height: 4rem;

  ${({ isOdd }) => isOdd && "text-align-last: end"};

  @media ${theme.device.mobile} {
    font-size: 2.5rem;
  }
`;

export const SectionSubTitle = styled.p<{ isOdd: boolean }>`
  color: ${theme.color.gray900};
  font-size: 2rem;
  font-weight: 400;
  line-height: 2.5rem;

  ${({ isOdd }) => isOdd && "text-align: right"};

  @media ${theme.device.mobile} {
    text-align: left;
    font-size: 1.7rem;
  }
`;

export const ButtonStyle = `
  padding : 1.5rem;
  font-weight : 500;
  width : 12rem;
  border-radius : 50rem;

  @media ${theme.device.mobile} {
    width : 20rem;
    padding : 1.5rem;
  }
`;
