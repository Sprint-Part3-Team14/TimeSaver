import { useQuery } from "@tanstack/react-query";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import SidebarTitle from "./SidebarTItle/SidebarTitle";
import * as S from "./SidebarStyled";

const Sidebar = () => {
  const { data: dashboardList } = useQuery(dashboardQueryKeys.list({ navigationMethod: "pagination" }));

  if (!dashboardList) {
    return <div />;
  }
  return (
    <S.SideBarContainer>
      <SidebarTitle />
      <S.Container>
        {dashboardList.dashboards.map(({ title, color, createdByMe, id }) => (
          <S.Title key={id} href={`/dashboard/${id}`} createdByMe={createdByMe} color={color}>
            <S.TitleText>{title}</S.TitleText>
          </S.Title>
        ))}
      </S.Container>
    </S.SideBarContainer>
  );
};

export default Sidebar;
