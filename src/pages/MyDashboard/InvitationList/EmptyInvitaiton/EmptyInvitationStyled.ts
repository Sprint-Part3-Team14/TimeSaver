import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 66px 0;
`;

export const Text = styled.p`
  padding-top: 24px;

  color: ${({ theme }) => theme.color.gray800};
  text-align: center;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
