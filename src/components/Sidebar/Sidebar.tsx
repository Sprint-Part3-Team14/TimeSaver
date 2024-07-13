import EllipseIcon from "../Icons/EllipseIcon";
import CrownIcon from "../Icons/CrownIcon";

import SidebarTitle from "./SidebarTItle/SidebarTitle";

import * as S from "./SidebarStyled";

const MyDashboard = [
  {
    id: 0,
    title: "테스트1",
    color: "#7AC555",
    createdByMe: true,
  },
  {
    id: 1,
    title: "테스트2",
    color: "#760DDE",
    createdByMe: false,
  },
];

const Sidebar = () => {
  return (
    <>
      <SidebarTitle />
      <S.Container>
        {MyDashboard.map(({ title, color, createdByMe, id }) => (
          <S.List key={id} href={`/dashboard/${id}`}>
            <EllipseIcon width={8} height={8} color={color} />
            <S.Title>
              <S.Name>{title}</S.Name>
              {createdByMe && <CrownIcon width={17.6} height={14} />}
            </S.Title>
          </S.List>
        ))}
      </S.Container>
    </>
  );
};

export default Sidebar;
