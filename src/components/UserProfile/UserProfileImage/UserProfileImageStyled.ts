import theme from "src/styles/theme";
import styled from "styled-components";

export const UserProfileImg = styled.img<{ size?: string; addStyle?: string }>`
  border-radius: 50%;
  object-fit: cover;
  border: 0.1rem solid ${theme.color.gray700};
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  ${({ addStyle }) => addStyle}
`;
