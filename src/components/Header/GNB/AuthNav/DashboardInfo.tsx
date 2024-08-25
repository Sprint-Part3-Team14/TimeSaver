import React from "react";
import Members, { MembersProps } from "./Members";
import * as S from "./DashboardInfoStyled";

interface DashboardInfoProps {
  createdByMe?: boolean;
  memberList?: MembersProps;
  dashboardId: number;
}

const DashboardInfo = ({ createdByMe = false, memberList, dashboardId }: DashboardInfoProps) => {
  return (
    <S.DashboardInfoContainer>
      {createdByMe && (
        <>
          <S.CustomLink to={`/dashboard/${dashboardId}/edit`}>
            <S.CustomButton>
              <S.Icon src="/images/Icons/setting.svg" alt="Setting" />
              <S.ButtonText>관리</S.ButtonText>
            </S.CustomButton>
          </S.CustomLink>
          <S.CustomLink to={`/dashboard/${dashboardId}/invitation`}>
            <S.CustomButton>
              <S.Icon src="/images/Icons/plus.svg" alt="Invite" />
              <S.ButtonText>초대하기</S.ButtonText>
            </S.CustomButton>
          </S.CustomLink>
        </>
      )}
      {memberList && <Members members={memberList.members} totalCount={memberList.totalCount} />}
    </S.DashboardInfoContainer>
  );
};

export default DashboardInfo;
