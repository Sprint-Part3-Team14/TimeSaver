import { useQuery } from "@tanstack/react-query";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import Button from "src/components/Button/Button";
import { SidePageHeader, SidePageLayout } from "../SidePage";
import DashboardMember from "./components/DashboardMember/DashboardMember";
import RenameDashboard from "./components/RenameDashboard/RenameDashboard";
import DashboardInvitation from "./components/DashboardInvitation/DashboardInvitation";
import * as S from "./EditDashboardStyled";

const EditDashboard = ({ handleClose, dashboardId }: { handleClose: () => void; dashboardId: number }) => {
  const { data: dashboardMemberList } = useQuery(
    dashboardQueryKeys.members({ size: 4, page: 1, dashboardId: dashboardId })
  );

  if (!dashboardMemberList) {
    return <div>멤버 없음 ㅋ</div>;
  }

  return (
    <SidePageLayout handleClose={handleClose} addStyle={S.EditDashboardContainer}>
      <SidePageHeader handleClosing={handleClose} addStyle={S.HeaderStyled}>
        <S.SidePageTitleStyled>대시보드 관리</S.SidePageTitleStyled>
      </SidePageHeader>
      <S.EditDashboardLayout>
        <RenameDashboard dashboardId={dashboardId} />
        <DashboardMember dashboardMemberList={dashboardMemberList} dashboardId={dashboardId} />
        <DashboardInvitation dashboardId={dashboardId} />
        <Button styleVariant="white" size="large" exceptionStyle={S.AddButtonStyle}>
          대시보드 삭제하기
        </Button>
      </S.EditDashboardLayout>
    </SidePageLayout>
  );
};

export default EditDashboard;
