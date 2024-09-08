import { Helmet } from "react-helmet-async";
import InvitationList from "./InvitationList/InvitationList";
import DashboardListSection from "./ParticipationList/DashboardListSection";
import * as S from "./MyDashboardStyled";

const MyDashboard = () => {
  return (
    <>
      <Helmet>
        <title>나의 대시보드</title>
      </Helmet>
      <S.Layout>
        <DashboardListSection />
        <InvitationList />
      </S.Layout>
    </>
  );
};

export default MyDashboard;
