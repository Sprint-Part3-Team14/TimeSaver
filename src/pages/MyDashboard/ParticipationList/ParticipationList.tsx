import AddDashboard from "./AddDashboard/AddDashboard";
import PagiNation from "./PagiNation/PagiNation";
import ParticipationDashboard from "./ParicipationDashboard/ParticipationDashboard";
import * as S from "./ParticipationListStyled";

const ParticipationList = () => {
  return (
    <S.Layout>
      <S.Grid>
        <AddDashboard />
        <ParticipationDashboard />
        <ParticipationDashboard />
        <ParticipationDashboard />
        <ParticipationDashboard />
        <ParticipationDashboard />
      </S.Grid>
      <PagiNation />
    </S.Layout>
  );
};
export default ParticipationList;
