import React, { useState, useEffect } from "react";
import { DashboardSearch, MembersSearch } from "src/utils/apiType";
import { getDashboardDetails, getMembers } from "src/utils/api";
import * as S from "./AuthNavStyled";
import DashboardInfo from "./AuthNav/DashboardInfo";
import { MembersProps } from "./AuthNav/Members";
import ProfileInfo from "./AuthNav/ProfileInfo";

interface Props {
  dashboardId?: number;
}

export interface I_dashboardData {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

const AuthNav = ({ dashboardId }: Props) => {
  const [dashboardInfo, setDashboardInfo] = useState<I_dashboardData | null>(null);
  const [memberList, setMemberList] = useState<MembersProps | null>(null);

  useEffect(() => {
    if (!dashboardId) {
      return;
    }

    const fetchDashboardData = async () => {
      try {
        const dashboardQuery: DashboardSearch = { id: dashboardId };
        const fetchedDashboardInfo = await getDashboardDetails(dashboardQuery.id);
        setDashboardInfo(fetchedDashboardInfo);

        const memberQuery: MembersSearch = { page: 1, size: 10, dashboardId: dashboardId };
        const fetchedMembers = await getMembers(memberQuery);
        setMemberList(fetchedMembers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDashboardData();
  }, [dashboardId]);

  if (!dashboardId) {
    return null;
  }

  const title = dashboardInfo ? dashboardInfo.title : "내 대시보드";

  return (
    <S.HeaderContainer>
      <S.LogoAndTitleContainer>
        <S.LogoContainer>
          <S.Logo />
        </S.LogoContainer>
        <S.TitleContainer>
          <S.Crown createdByMe={dashboardInfo?.createdByMe || false}>{title}</S.Crown>
        </S.TitleContainer>
      </S.LogoAndTitleContainer>
      <S.NavLinks>
        {dashboardInfo && memberList && (
          <DashboardInfo createdByMe={dashboardInfo.createdByMe} dashboardId={dashboardId} memberList={memberList} />
        )}
        <ProfileInfo />
      </S.NavLinks>
    </S.HeaderContainer>
  );
};

export default AuthNav;
