import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDashboardDetails, getMembers } from "src/utils/api";
import { DashboardInfoData } from "src/utils/apiResponseType";
import DashboardInfo from "./AuthNav/DashboardInfo";
import { MembersProps } from "./AuthNav/Members";
import ProfileInfo from "./AuthNav/ProfileInfo";
import * as S from "./AuthNavStyled";

const AuthNav = () => {
  const { id } = useParams<{ id: string }>();
  const [dashboardInfo, setDashboardInfo] = useState<DashboardInfoData | null>(null);
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
