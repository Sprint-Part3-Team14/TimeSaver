import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDashboardDetails, getMembers } from "src/utils/api";
import DashboardInfo from "./AuthNav/DashboardInfo";
import ProfileInfo from "./AuthNav/ProfileInfo";
import * as S from "./AuthNavStyled";
import type { DashboardInfoData, GetMembersResponse } from "src/utils/apiResponseType";

const AuthNav = () => {
  const { id } = useParams<{ id: string }>();
  const [dashboardInfo, setDashboardInfo] = useState<DashboardInfoData | null>(null);
  const [memberList, setMemberList] = useState<GetMembersResponse | null>(null);

  useEffect(() => {
    const fetchDashboardData = async () => {
      if (!id) {
        return;
      }
      try {
        const numericDashboardId = parseInt(id, 10);
        const fetchedDashboardInfo = await getDashboardDetails(numericDashboardId);
        setDashboardInfo(fetchedDashboardInfo);

        const memberQuery = { page: 1, size: 10, dashboardId: numericDashboardId };
        const fetchedMembers = await getMembers(memberQuery);
        setMemberList(fetchedMembers);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDashboardData();
  }, [id]);

  const defaultTitle = "";
  const title = dashboardInfo ? dashboardInfo.title : defaultTitle;

  return (
    <S.HeaderContainer>
      <a href="/">
        <S.LogoImg src="/images/Main_Logo.png" />
      </a>
      <S.LogoAndTitleContainer>
        <S.DashboardTitle createdByMe={dashboardInfo?.createdByMe || false}>{title}</S.DashboardTitle>

        <S.NavLinks>
          {id && memberList && (
            <DashboardInfo
              createdByMe={dashboardInfo?.createdByMe || false}
              dashboardId={parseInt(id, 10)}
              memberList={memberList}
            />
          )}
          <ProfileInfo />
        </S.NavLinks>
      </S.LogoAndTitleContainer>
    </S.HeaderContainer>
  );
};

export default AuthNav;
