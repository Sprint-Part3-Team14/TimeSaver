import styled from "styled-components";

export const Layout = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1022px;
  padding-top: 32px;
  gap: 20px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.color.white};
`;

export const Title = styled.h1`
  padding: 0 28px;

  color: ${({ theme }) => theme.color.black700};
  font-size: 24px;
  font-weight: 700;
`;

export const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4px 28px 4px;
`;

export const CategoryTitle = styled.h2`
  color: ${({ theme }) => theme.color.gray800};
  font-size: 16px;
  font-weight: 400;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
