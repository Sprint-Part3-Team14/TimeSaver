import { Outlet } from "react-router-dom";
import * as S from "./DashboardLayoutStyled";
import Sidebar from "./components/Sidebar/Sidebar";

function DashboardLayout() {
  return (
    <S.DashboardLayout>
      <S.HeaderLayout>header</S.HeaderLayout>
      <S.SideBarLayout>
        <Sidebar />
      </S.SideBarLayout>
      <S.ContentLayout>
        <Outlet />
      </S.ContentLayout>
    </S.DashboardLayout>
  );
}

export default DashboardLayout;
