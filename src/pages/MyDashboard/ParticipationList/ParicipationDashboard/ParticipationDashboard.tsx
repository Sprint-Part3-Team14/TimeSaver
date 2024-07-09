import ArrowBackwardIcon from "../../../../components/Icons/ArrowBackwardIcon";
import CrownIcon from "../../../../components/Icons/CrownIcon";
import EllipseIcon from "../../../../components/Icons/EllipseIcon";

import * as S from "./ParticipationDashboardStyeld";

const ParticipationDashboard = () => {
  return (
    <S.Container>
      <S.TitleBox>
        <EllipseIcon width={8} height={8} />
        <S.Title>대시보드 제목</S.Title>
        <CrownIcon width={20} height={16} />
      </S.TitleBox>
      <ArrowBackwardIcon width={18} height={18} />
    </S.Container>
  );
};

export default ParticipationDashboard;
