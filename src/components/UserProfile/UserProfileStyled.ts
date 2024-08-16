import styled from "styled-components";
import theme from "src/styles/theme";

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.2rem;
`;

export const UserNickName = styled.div`
  color: ${theme.color.black700};
  font-size: 1.6rem;
`;
