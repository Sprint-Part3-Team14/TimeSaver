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

  color: var(--black-black_700, #333236);
  font-family: Inter;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const CategoryBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 4px 28px 4px;

  color: var(--gray-gray_800, #9fa6b2);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;
