import InvitationList from "./InvitationList/InvitationList";
import ParticipationList from "./ParticipationList/ParticipationList";
import * as S from "./MyDashboardStyled";

const MyDashboard = () => {
  return (
    <S.Layout>
      <ParticipationList />
      <InvitationList />
    </S.Layout>
  );
};

export default MyDashboard;
