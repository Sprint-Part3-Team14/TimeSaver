import Button from "src/components/Button/Button";
import * as S from "./InvitationDahsboardStyled";
import type { InviterResponse } from "src/utils/apiResponseType";

const InvitationDashboard = ({ invite }: { invite: InviterResponse }) => {
  return (
    <S.InvitationDashboardBox>
      <S.Name>{invite.nickname}</S.Name>
      <S.Invitor>{invite.email}</S.Invitor>
      <S.ButtonBox>
        <Button>수락</Button>
        <Button styleVariant="white">거절</Button>
      </S.ButtonBox>
    </S.InvitationDashboardBox>
  );
};

export default InvitationDashboard;
