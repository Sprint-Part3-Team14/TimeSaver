import { DashboardInfoData } from "src/utils/apiResponseType";
import * as S from "./ParticipationDashboardStyled";

const Dashboard = ({ dashboardItem }: { dashboardItem: DashboardInfoData }) => {
  return (
    <S.TitleButton createdByMe={dashboardItem.createdByMe} color={dashboardItem.color}>
      <S.TitleStyle>{dashboardItem.title}</S.TitleStyle>
    </S.TitleButton>
  );
};

export default Dashboard;
