import theme from "src/styles/theme";
import styled from "styled-components";

export const InvitationDashboardBox = styled.li`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2.4rem 2.8rem;
  border-bottom: 0.1rem solid ${theme.color.gray600};

  &:last-child {
    border-bottom: none;
  }

  @media ${theme.device.mobile} {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const Name = styled.h3`
  padding-left: 3.6rem;
  color: ${theme.color.black700};
  font-size: 1.6rem;

  @media ${theme.device.mobile} {
    margin-right: auto;
    padding: 0;
    &::before {
      content: "이름";
      color: ${theme.color.gray800};
      font-size: 1.6rem;
      margin-right: 1rem;
    }
  }
`;

export const Inviter = styled.h3`
  color: ${theme.color.black700};
  font-size: 1.6rem;

  @media ${theme.device.mobile} {
    margin-right: auto;
    &::before {
      content: "초대자";
      color: ${theme.color.gray800};
      font-size: 1.6rem;
      margin-right: 1rem;
    }
  }
`;

export const ButtonBox = styled.div`
  display: flex;
  width: 17.8rem;
  gap: 1rem;

  @media ${theme.device.mobile} {
    width: 100%;
  }
`;
