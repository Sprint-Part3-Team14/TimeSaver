import { useQuery } from "@tanstack/react-query";

import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";

import EllipseIcon from "../Icons/EllipseIcon";

import SidebarTitle from "./SidebarTItle/SidebarTitle";
import * as S from "./SidebarStyled";

const Sidebar = () => {
  const { data: dashboardList } = useQuery(dashboardQueryKeys.list({ navigationMethod: "pagination" }));

  if (!dashboardList) {
    return <div />;
  }
  return (
    <>
      <SidebarTitle />
      <S.Container>
        {dashboardList.dashboards.map(({ title, color, createdByMe, id }) => (
          <S.List key={id} href={`/dashboard/${id}`}>
            <EllipseIcon width={8} height={8} color={color} />
            <S.Title createdByMe={createdByMe}>
              <S.Name>{title}</S.Name>
            </S.Title>
          </S.List>
        ))}
      </S.Container>
    </>
  );
};

export default Sidebar;
