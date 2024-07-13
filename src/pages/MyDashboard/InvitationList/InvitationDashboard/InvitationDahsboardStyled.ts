import styled from "styled-components";

export const InvitationDashboardBox = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  padding: 24px 28px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray600};

  &:last-child {
    border-bottom: none;
  }
`;

export const Name = styled.h3`
  padding-left: 36px;
  color: ${({ theme }) => theme.color.black700};
  font-size: 16px;
`;

export const Invitor = styled.h3`
  color: ${({ theme }) => theme.color.black700};
  font-size: 16px;
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 178px;
  gap: 10px;
`;
