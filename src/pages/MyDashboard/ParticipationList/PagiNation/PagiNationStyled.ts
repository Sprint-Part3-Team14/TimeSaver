import theme from "src/styles/theme";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 1.1rem;
  align-items: center;
  justify-content: flex-end;
`;

export const Page = styled.p`
  color: ${theme.color.black700};
  font-size: 1.4rem;
  font-weight: 400;
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const LeftButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 0;

  border-radius: 0.4rem 0 0 0.4rem;
  border: 1px solid ${theme.color.gray700};
  background: ${theme.color.white};

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

export const RightButton = styled.button`
  width: 4rem;
  height: 4rem;
  padding: 0;

  border-radius: 0 0.4 0.4 0;
  border: 1px solid ${theme.color.gray700};
  background: ${theme.color.white};

  display: inline-flex;
  justify-content: center;
  align-items: center;
`;
