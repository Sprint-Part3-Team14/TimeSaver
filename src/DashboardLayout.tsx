import { Outlet } from "react-router-dom";
import * as S from "./DashboardLayoutStyled";
import OptionalHeader from "./components/Header/OptionalHeader";

function DashboardLayout() {
  return (
    <S.DashboardLayout>
      <S.HeaderLayout>
        <OptionalHeader/>
      </S.HeaderLayout>
      <S.SideBarLayout>sidebar</S.SideBarLayout>
      <S.ContentLayout>
        <Outlet />
      </S.ContentLayout>
    </S.DashboardLayout>
  );
}

export default DashboardLayout;
