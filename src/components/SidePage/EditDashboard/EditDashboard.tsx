import { SidePageHeader, SidePageLayout } from "../SidePage";
import RenameDashboard from "./components/RenameDashboard/RenameDashboard";
import * as S from "./EditDashboardStyled";

const EditDashboard = ({ handleClose, dashboardId }: { handleClose: () => void; dashboardId: number }) => {
  return (
    <SidePageLayout handleClose={handleClose}>
      <SidePageHeader handleClosing={handleClose} addStyle={S.HeaderStyled}>
        <S.SidePageTitleStyled>대시보드 관리</S.SidePageTitleStyled>
      </SidePageHeader>
      <S.EditDashboardLayout>
        <RenameDashboard dashboardId={dashboardId} />
        <S.EditDashboardSection>구성원</S.EditDashboardSection>
        <S.EditDashboardSection>초대 내역</S.EditDashboardSection>
      </S.EditDashboardLayout>
    </SidePageLayout>
  );
};

export default EditDashboard;
