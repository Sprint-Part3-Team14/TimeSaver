import { SidePageHeader, SidePageLayout } from "../SidePage";
import * as S from "./EditDashboardStyled";

const EditDashboard = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <SidePageLayout handleClose={handleClose}>
      <SidePageHeader handleClosing={handleClose} addStyle={S.HeaderStyled}>
        <S.SidePageTitleStyled>대시보드 관리</S.SidePageTitleStyled>
      </SidePageHeader>
    </SidePageLayout>
  );
};

export default EditDashboard;
