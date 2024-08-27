import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
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

  const fetchDashboardDetailsMutation = useMutation({
    mutationFn: async (dashboardId: number) => await getDashboardDetails(dashboardId),
    onSuccess: data => {
      setDashboardInfo(data);
    },
    onError: error => {
      console.error("Error fetching dashboard details:", error);
    },
  });

  const fetchMembersMutation = useMutation({
    mutationFn: async (dashboardId: number) => {
      const memberQuery = { page: 1, size: 10, dashboardId };
      return await getMembers(memberQuery);
    },
    onSuccess: data => {
      setMemberList(data);
    },
    onError: error => {
      console.error("Error fetching members:", error);
    },
  });

  useEffect(() => {
    if (id) {
      const numericDashboardId = parseInt(id, 10);
      fetchDashboardDetailsMutation.mutate(numericDashboardId);
      fetchMembersMutation.mutate(numericDashboardId);
    }
  }, [fetchDashboardDetailsMutation, fetchMembersMutation, id]);

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
