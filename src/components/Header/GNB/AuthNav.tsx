import React, { useState, useEffect } from "react";
import { DashboardSearch, MembersSearch } from "src/utils/apiType";
import { getDashboardDetails, getMembers } from "src/utils/api";
import CrownIcon from "../../Icons/CrownIcon";
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
    const fetchDashboardData = async () => {
      if (dashboardId) {
        try {
          const dashboardQuery: DashboardSearch = { id: dashboardId };
          const fetchedDashboardInfo = await getDashboardDetails(dashboardQuery);
          setDashboardInfo(fetchedDashboardInfo);

          const memberQuery: MembersSearch = { page: 1, size: 10 };
          const fetchedMembers = await getMembers(memberQuery);
          setMemberList(fetchedMembers);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchDashboardData();
  }, [dashboardId]);

  const title = dashboardId && dashboardInfo ? dashboardInfo.title : "내 대시보드";

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
        {dashboardId && dashboardInfo && memberList && (
          <DashboardInfo createdByMe={dashboardInfo.createdByMe} dashboardId={dashboardId} memberList={memberList} />
        )}
        <ProfileInfo />
      </S.NavLinks>
    </S.HeaderContainer>
  );
};

export default AuthNav;
