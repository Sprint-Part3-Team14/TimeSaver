import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getDashboardDetails, getMembers } from "src/utils/api";
import * as S from "./AuthNavStyled";
import DashboardInfo from "./AuthNav/DashboardInfo";
import { MembersProps } from "./AuthNav/Members";
import ProfileInfo from "./AuthNav/ProfileInfo";

interface I_dashboardData {
  id: number;
  title: string;
  color: string;
  createdAt: string;
  updatedAt: string;
  createdByMe: boolean;
  userId: number;
}

const AuthNav = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [dashboardInfo, setDashboardInfo] = useState<I_dashboardData | null>(null);
  const [memberList, setMemberList] = useState<MembersProps | null>(null);

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

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <S.HeaderContainer>
      <S.LogoContainer onClick={handleLogoClick}>
        <S.Logo />
      </S.LogoContainer>
      <S.LogoAndTitleContainer>
        <S.TitleContainer>
          <S.Crown createdByMe={dashboardInfo?.createdByMe || false}>{title}</S.Crown>
        </S.TitleContainer>

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
