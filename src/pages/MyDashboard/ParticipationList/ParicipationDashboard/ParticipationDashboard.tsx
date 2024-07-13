import ArrowBackwardIcon from "../../../../components/Icons/ArrowBackwardIcon";
import CrownIcon from "../../../../components/Icons/CrownIcon";
import EllipseIcon from "../../../../components/Icons/EllipseIcon";

import * as S from "./ParticipationDashboardStyeld";

interface DashboardItemProps {
  dashboardItem: {
    id: number;
    title: string;
    color: string;
    createdByMe: boolean;
  };
}

const ParticipationDashboard = ({ dashboardItem }: DashboardItemProps) => {
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
