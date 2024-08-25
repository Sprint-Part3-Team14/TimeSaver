import styled from "styled-components";
import { AfterCrownIcon } from "src/styles/mixinCSS";

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 4px;

  :hover {
    background-color: ${({ theme }) => theme.color.gray500};
  }
`;

export const List = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 16px;
  padding: 11px 26px;
  border-radius: 8px;
  cursor: pointer;
`;

export const Title = styled.div<{ createdByMe: boolean }>`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${({ createdByMe }) => (createdByMe ? AfterCrownIcon : "")}
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.color.gray900};
  font-size: 18px;
  font-weight: 500;
`;
