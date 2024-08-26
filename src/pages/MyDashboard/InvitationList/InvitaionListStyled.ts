import styled from "styled-components";
import theme from "src/styles/theme";

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 102.2rem;
  padding-top: 3.2rem;
  gap: 2rem;

  border-radius: 0.8rem;
  background-color: ${theme.color.white};
`;

export const Title = styled.h1`
  padding: 0 2.8rem;

  color: ${theme.color.black700};
  font-size: 2.4rem;
  font-weight: 700;
`;

export const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0.4rem 2.8rem 0.4rem;

  @media ${theme.device.mobile} {
    display: none;
  }
`;

export const CategoryTitle = styled.h2`
  color: ${theme.color.gray800};
  font-size: 1.6rem;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
