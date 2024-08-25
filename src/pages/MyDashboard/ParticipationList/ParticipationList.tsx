import { useQuery } from "@tanstack/react-query";
import Pagination from "src/components/PagiNation/PagiNation";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import AddDashboard from "./AddDashboard/AddDashboard";
import ParticipationDashboard from "./ParicipationDashboard/ParticipationDashboard";
import * as S from "./ParticipationListStyled";

const ParticipationList = () => {
  const { data: dashboardList } = useQuery(dashboardQueryKeys.list({ navigationMethod: "pagination" }));

  if (!dashboardList?.dashboards) {
    return <div>데이터가 없어요</div>;
  }

  return (
    <>
      <S.Layout>
        <S.Grid>
          {dashboardList.dashboards.map((dashboard, index) => {
            if (index > 4) {
              return;
            } else {
              return <ParticipationDashboard dashboardItem={dashboard} key={dashboard.id} />;
            }
          })}
          <AddDashboard />
        </S.Grid>
        {dashboardList.dashboards.length > 0 && <Pagination />}
      </S.Layout>
    </>
  );
};
export default ParticipationList;
