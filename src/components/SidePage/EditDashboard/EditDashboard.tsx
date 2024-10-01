import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import Button from "src/components/Button/Button";
import { DashboardInfoData } from "src/utils/apiResponseType";
import { deleteDashboard } from "src/utils/api";
import { useNavigate } from "react-router-dom";
import { SidePageHeader, SidePageLayout } from "../SidePage";
import DashboardMember from "./components/DashboardMember/DashboardMember";
import RenameDashboard from "./components/RenameDashboard/RenameDashboard";
import DashboardInvitation from "./components/DashboardInvitation/DashboardInvitation";
import * as S from "./EditDashboardStyled";

const EditDashboard = ({
  handleClose,
  dashboardId,
  dashboardInfo,
  handleCloseEditPage,
}: {
  handleClose: () => void;
  dashboardId: number;
  dashboardInfo: DashboardInfoData | null;
  handleCloseEditPage: () => void;
}) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { data: dashboardMemberList } = useQuery(
    dashboardQueryKeys.members({ size: 4, page: 1, dashboardId: dashboardId })
  );
  const dashboardDeleteMutation = useMutation({
    mutationFn: async () => await deleteDashboard(dashboardId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: dashboardQueryKeys.list({ page: 1, size: 10, navigationMethod: "pagination" }).queryKey,
      });
      handleCloseEditPage();
      navigate("/my-dashboard");
    },
  });

  if (!dashboardMemberList) {
    return <div>멤버 없음 ㅋ</div>;
  }

  return (
    <SidePageLayout handleClose={handleClose} addStyle={S.EditDashboardContainer}>
      <SidePageHeader handleClosing={handleClose} addStyle={S.HeaderStyled}>
        <S.SidePageTitleStyled>대시보드 관리</S.SidePageTitleStyled>
      </SidePageHeader>
      <S.EditDashboardLayout>
        <RenameDashboard
          handleClose={handleCloseEditPage}
          dashboardId={dashboardId}
          dashboardTitle={dashboardInfo?.title}
          dashboardColor={dashboardInfo?.color}
        />
        <DashboardMember dashboardMemberList={dashboardMemberList} dashboardId={dashboardId} />
        <DashboardInvitation dashboardId={dashboardId} />
        <Button
          styleVariant="white"
          size="large"
          exceptionStyle={S.AddButtonStyle}
          onClick={() => {
            dashboardDeleteMutation.mutate();
          }}>
          대시보드 삭제하기
        </Button>
      </S.EditDashboardLayout>
    </SidePageLayout>
  );
};

export default EditDashboard;
