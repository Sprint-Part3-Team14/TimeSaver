import Pagination from "../../../components/PagiNation/PagiNation";
import AddDashboard from "./AddDashboard/AddDashboard";
import ParticipationDashboard from "./ParicipationDashboard/ParticipationDashboard";
import * as S from "./ParticipationListStyled";

const DashboardList = [
  {
    id: 1,
    title: "테스트1",
    color: "#123123",
    createdByMe: true,
  },
  {
    id: 2,
    title: "테스트2",
    color: "#456456",
    createdByMe: false,
  },
  {
    id: 3,
    title: "테스트3",
    color: "#789789",
    createdByMe: true,
  },
  {
    id: 4,
    title: "테스트4",
    color: "#ABCABC",
    createdByMe: false,
  },
  {
    id: 5,
    title: "테스트5",
    color: "#DEFDEF",
    createdByMe: true,
  },
];

const ParticipationList = () => {
  return (
    <S.Layout>
      <S.Grid>
        <AddDashboard />
        {DashboardList.map(dashboard => (
          <ParticipationDashboard dashboardItem={dashboard} key={dashboard.id} />
        ))}
      </S.Grid>
      {DashboardList.length > 0 && <Pagination />}
    </S.Layout>
  );
};
export default ParticipationList;
