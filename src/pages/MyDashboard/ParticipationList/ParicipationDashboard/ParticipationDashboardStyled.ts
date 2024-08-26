import styled from "styled-components";
import { AfterCrownIcon } from "src/styles/mixin";
import theme from "src/styles/theme";

export const TitleButton = styled.a<{ createdByMe: boolean; color: string }>`
  border: 0.1rem solid ${theme.color.gray700};
  border-radius: 0.8rem;
  background-color: ${theme.color.white};
  padding: 2.5rem;

  display: flex;
  align-items: center;
  gap: 1rem;

  &::before {
    content: "";
    width: 0.8rem;
    height: 0.8rem;
    background-color: ${({ color }) => color};
    border-radius: 50%;
    margin-right: 1.5rem;
    flex-shrink: 0;
  }

  ${({ createdByMe }) => (createdByMe ? AfterCrownIcon : "")}

  &:hover {
    background-color: ${({ theme }) => theme.color.gray500};
  }
`;

export const TitleStyle = styled.p`
  color: ${theme.color.black700};
  font-weight: 600;
  font-size: 1.6rem;

  text-wrap: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: auto;

  @media ${theme.device.mobile} {
    max-width: 14.4rem;
  }
`;
