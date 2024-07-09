import { Outlet } from "react-router-dom";

import * as S from "./DashboardLayoutStyled";



  return (
    <S.DashboardLayout>
      <S.HeaderLayout>header</S.HeaderLayout>
      <S.SideBarLayout>sidebar</S.SideBarLayout>
      <S.ContentLayout>
        <Outlet />
      </S.ContentLayout>
    </S.DashboardLayout>
  );
}

export default DashboardLayout;
