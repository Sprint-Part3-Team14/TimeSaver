import { useQuery } from "@tanstack/react-query";
import Pagination from "src/components/PagiNation/PagiNation";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import CreateDashboard from "src/components/Modal/CreateDashboard/CreateDashboard";
import useToggle from "src/hooks/useToggle";
import AddDashboard from "./AddDashboard/AddDashboard";
import ParticipationDashboard from "./ParicipationDashboard/ParticipationDashboard";
import * as S from "./ParticipationListStyled";

const ParticipationList = () => {
  const {
    isTrue: isOpenCreateDashboard,
    handleTrue: handleOpenCreateDashboard,
    handleFalse: handleCloseCreateDashboard,
  } = useToggle();
  const { data: dashboardList } = useQuery(dashboardQueryKeys.list({ navigationMethod: "pagination" }));

  if (!dashboardList?.dashboards) {
    return <div>데이터가 없어요</div>;
  }

  return (
    <>
      {isOpenCreateDashboard && <CreateDashboard handleClose={handleCloseCreateDashboard} />}
      <S.Layout>
        <S.Grid>
          {dashboardList.dashboards.map((dashboard, index) => {
            if (index > 4) {
              return;
            } else {
              return <ParticipationDashboard dashboardItem={dashboard} key={dashboard.id} />;
            }
          })}
          <AddDashboard onClick={handleOpenCreateDashboard} />
        </S.Grid>
        {dashboardList.dashboards.length > 0 && <Pagination />}
      </S.Layout>
    </>
  );
};
export default ParticipationList;
