import styled from "styled-components";

export const InvitationDashboardBox = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  padding: 20px 28px;
  border-bottom: 1px solid ${({ theme }) => theme.color.gray600};

  &:last-child {
    border-bottom: none;
  }
`;

export const Name = styled.h3`
  padding-left: 36px;
  color: var(--black-black_700, #333236);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Invitor = styled.h3`
  color: var(--black-black_700, #333236);
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ButtonBox = styled.div`
  display: flex;
  gap: 10px;
`;
