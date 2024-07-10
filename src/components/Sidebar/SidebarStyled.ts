import styled from "styled-components";

export const Layout = styled.aside`
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 100vh; // 수정예정
  padding: 38px 12px;

  border-right: 1px solid ${({ theme }) => theme.color.gray700};
`;

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

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Name = styled.div`
  color: ${({ theme }) => theme.color.gray900};
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
