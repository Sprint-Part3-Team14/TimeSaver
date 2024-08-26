import InvitationList from "./InvitationList/InvitationList";
import DashboardListSection from "./ParticipationList/DashboardListSection";
import * as S from "./MyDashboardStyled";

const MyDashboard = () => {
  return (
    <S.Layout>
      <DashboardListSection />
      <InvitationList />
    </S.Layout>
  );
};

export default MyDashboard;
