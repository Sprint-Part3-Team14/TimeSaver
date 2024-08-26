/* eslint-disable @typescript-eslint/no-empty-function */
import { useQuery } from "@tanstack/react-query";
import Pagination from "src/components/PagiNation/PagiNation";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import AddDashboard from "./AddDashboard/AddDashboard";
import Dashboard from "./ParicipationDashboard/ParticipationDashboard";
import * as S from "./ParticipationListStyled";

const DashboardListSection = () => {
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
              return <Dashboard dashboardItem={dashboard} key={dashboard.id} />;
            }
          })}
          <AddDashboard />
        </S.Grid>
        {dashboardList.dashboards.length > 0 && (
          <Pagination addStyle={S.ButtonPosition} currentPage={0} totalPages={0} onPageChange={() => {}} />
        )}
      </S.Layout>
    </>
  );
};
export default DashboardListSection;
