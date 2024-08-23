import React, { useState } from "react";
import CrownIcon from "../../Icons/CrownIcon";
import * as S from "./AuthNavStyled";
import DashboardInfo from "./AuthNav/DashboardInfo";
import { MembersProps } from "./AuthNav/Members";
import ProfileInfo from "./AuthNav/ProfileInfo";

interface Props {
  dashboardId?: number;
}

interface I_dashboardData {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

const AuthNav = ({ dashboardId }: Props) => {
  const [dashboardInfo] = useState<I_dashboardData>({
    id: 1,
    title: "더미 대시보드",
    color: "blue",
    createdAt: "2024-07-01T12:00:00Z",
    updatedAt: "2024-07-01T12:00:00Z",
    createdByMe: true,
    userId: 123,
  });

  const [memberList] = useState<MembersProps>({
    members: [
      { id: 1, nickname: "User1", profileImageUrl: null },
      { id: 2, nickname: "User2", profileImageUrl: null },
    ],
    totalCount: 2,
  });

  const title = dashboardId ? dashboardInfo?.title : "내 대시보드";
  return (
    <S.HeaderContainer>
      <S.LogoAndTitleContainer>
        <S.LogoContainer>
          <S.Logo />
        </S.LogoContainer>
        <S.TitleContainer>
          <S.Text>{title}</S.Text>
          {dashboardInfo?.createdByMe && <CrownIcon width={18} height={28} />}
        </S.TitleContainer>
      </S.LogoAndTitleContainer>
      <S.NavLinks>
        {dashboardId && (
          <DashboardInfo createdByMe={dashboardInfo?.createdByMe} dashboardId={dashboardId} memberList={memberList} />
        )}
        <ProfileInfo />
      </S.NavLinks>
    </S.HeaderContainer>
  );
};

export default AuthNav;
