import styled from "styled-components";

export const UserProfileImg = styled.img<{ size?: string; addStyle?: string }>`
  border-radius: 50%;
  object-fit: cover;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  ${({ addStyle }) => addStyle}
`;
