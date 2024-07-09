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
        <button>수락</button>
        <button>거절</button>
      </S.ButtonBox>
    </S.InvitationDashboardBox>
  );
};

export default InvitationDashboard;
