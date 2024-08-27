import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getDashboardDetails, getMembers } from "src/utils/api";
import { userQueryKeys } from "src/queryFactory/userQueryKeys";
import UserProfileImage from "src/components/UserProfile/UserProfileImage/UserProfileImage";
import DashboardInfo from "./components/DashboardInfo";
import * as S from "./AuthNavStyled";
import type { DashboardInfoData, GetMembersResponse } from "src/utils/apiResponseType";

const AuthNav = () => {
  const { id } = useParams<{ id: string }>();
  const [dashboardInfo, setDashboardInfo] = useState<DashboardInfoData | null>(null);
  const [memberList, setMemberList] = useState<GetMembersResponse | null>(null);

  const { data: currentUser } = useQuery(userQueryKeys.current());

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

  if (!currentUser) return <div>아직 없어</div>;

  const defaultTitle = "";
  const title = dashboardInfo ? dashboardInfo.title : defaultTitle;

  return (
    <S.HeaderContainer>
      <S.LinkStyle to="/">
        <S.Logo />
      </S.LinkStyle>

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
          <S.ProfileContainer>
            <UserProfileImage profileImageUrl={currentUser.profileImageUrl} addStyle={S.AddProfileImageStyle} />
            <S.ProfileTextStyle>{currentUser.nickname}</S.ProfileTextStyle>
          </S.ProfileContainer>
        </S.NavLinks>
      </S.LogoAndTitleContainer>
    </S.HeaderContainer>
  );
};

export default AuthNav;
