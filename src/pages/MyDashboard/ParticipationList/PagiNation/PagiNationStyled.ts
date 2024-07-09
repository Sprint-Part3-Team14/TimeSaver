import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 11px;
  align-items: center;
  justify-content: flex-end;
`;

export const Page = styled.p`
  color: ${({ theme }) => theme.color.black700};
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const LeftButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;

  border-radius: 4px 0px 0px 4px;
  border: 1px solid ${({ theme }) => theme.color.gray700};
  background: ${({ theme }) => theme.color.white};

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const RightButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;

  border-radius: 0px 4px 4px 0px;
  border: 1px solid ${({ theme }) => theme.color.gray700};
  background: ${({ theme }) => theme.color.white};

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
