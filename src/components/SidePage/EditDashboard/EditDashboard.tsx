import { SidePageHeader, SidePageLayout } from "../SidePage";
import * as S from "./EditDashboardStyled";

const EditDashboard = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <SidePageLayout handleClose={handleClose}>
      <SidePageHeader handleClosing={handleClose} addStyle={S.HeaderStyled}>
        <S.SidePageTitleStyled>대시보드 관리</S.SidePageTitleStyled>
      </SidePageHeader>
      <S.EditDashboardLayout>
        <S.EditDashboardSection>대시보드명 변경</S.EditDashboardSection>
        <S.EditDashboardSection>구성원</S.EditDashboardSection>
        <S.EditDashboardSection>초대 내역</S.EditDashboardSection>
      </S.EditDashboardLayout>
    </SidePageLayout>
  );
};

export default EditDashboard;
