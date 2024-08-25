import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import CrownIcon from "src/components/Icons/CrownIcon";
import EllipseIcon from "src/components/Icons/EllipseIcon";
import { DashboardInfoData } from "src/utils/apiResponseType";

import * as S from "./ParticipationDashboardStyeld";

const ParticipationDashboard = ({ dashboardItem }: { dashboardItem: DashboardInfoData }) => {
  return (
    <S.Container>
      <S.TitleBox>
        <EllipseIcon width={8} height={8} color={dashboardItem.color} />
        <S.Title>{dashboardItem.title}</S.Title>
        {dashboardItem.createdByMe && <CrownIcon width={20} height={16} />}
      </S.TitleBox>
      <ArrowBackwardIcon width={18} height={18} />
    </S.Container>
  );
};

export default ParticipationDashboard;
