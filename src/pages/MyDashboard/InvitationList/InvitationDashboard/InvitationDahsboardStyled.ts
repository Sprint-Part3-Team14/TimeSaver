import theme from "src/styles/theme";
import styled from "styled-components";

export const InvitationDashboardBox = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 2.4rem 2.8rem;
  border-bottom: 1px solid ${theme.color.gray600};

  &:last-child {
    border-bottom: none;
  }
`;

export const Name = styled.h3`
  padding-left: 3.6rem;
  color: ${theme.color.black700};
  font-size: 1.6rem;
`;

export const Invitor = styled.h3`
  color: ${theme.color.black700};
  font-size: 1.6rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 17.8rem;
  gap: 1rem;
`;
