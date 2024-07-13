import Button from "../../../../components/Button/Button";
import * as S from "./InvitationDahsboardStyled";

interface InviteProps {
  invite: {
    id: number;
    name: string;
    invitor: string;
  };
}

const InvitationDashboard = ({ invite }: InviteProps) => {
  return (
    <S.InvitationDashboardBox>
      <S.Name>{invite.name}</S.Name>
      <S.Invitor>{invite.invitor}</S.Invitor>
      <S.ButtonBox>
        <Button>수락</Button>
        <Button styleVariant="white">거절</Button>
      </S.ButtonBox>
    </S.InvitationDashboardBox>
  );
};

export default InvitationDashboard;
