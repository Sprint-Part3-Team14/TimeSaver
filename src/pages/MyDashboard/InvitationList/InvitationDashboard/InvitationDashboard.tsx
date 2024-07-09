import * as S from "./InvitationDahsboardStyled";

const InvitationDashboard = () => {
  return (
    <S.InvitationDashboardBox>
      <S.Name>대시보드이름</S.Name>
      <S.Invitor>이름</S.Invitor>
      <S.ButtonBox>
        <button>수락</button>
        <button>거절</button>
      </S.ButtonBox>
    </S.InvitationDashboardBox>
  );
};

export default InvitationDashboard;
