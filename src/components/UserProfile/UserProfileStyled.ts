import styled from "styled-components";
import theme from "src/styles/theme";

export const ProfileContainer = styled.div<{ addStyle?: string }>`
  display: flex;
  align-items: center;
  gap: 1.2rem;

  ${({ addStyle }) => addStyle}
`;

export const UserNickName = styled.div`
  color: ${theme.color.black700};
`;
