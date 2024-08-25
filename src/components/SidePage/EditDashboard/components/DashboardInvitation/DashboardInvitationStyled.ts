import styled from "styled-components";
import theme from "src/styles/theme";
import {
  Title,
  Container,
  HeaderLayout,
  MemberContainer,
  GridText,
  MemberOne,
} from "../DashboardMember/DashboardMemberStyled";

export const ButtonLayout = `
  display : flex;
  gap : 1rem;
  align-items : center;
  justify-content : center;
`;

export const SectionContainer = styled(Container)``;

export const SectionTitle = styled(Title)`
  margin-right: auto;
`;

export const SectionHeader = styled(HeaderLayout)`
  gap: 1.5rem;
`;

export const InvitationContainer = styled(MemberContainer)``;

export const InvitationText = styled(GridText)``;

export const InvitationOne = styled(MemberOne)``;

export const EmailText = styled.p`
  color: ${theme.color.black700};
  font-size: 1.6rem;
`;
