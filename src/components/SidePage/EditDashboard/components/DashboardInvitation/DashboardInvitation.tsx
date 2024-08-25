import { useQuery } from "@tanstack/react-query";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import Button from "src/components/Button/Button";
import PlusIcon from "src/components/Icons/PlusIcon";
import { AddButtonStyle } from "../DashboardMember/DashboardMemberStyled";
import * as S from "./DashboardInvitationStyled";

const DashboardInvitation = ({ dashboardId }: { dashboardId: number }) => {
  const { data: invitationList } = useQuery(dashboardQueryKeys.invitations(dashboardId, { size: 4, page: 1 }));

  if (!invitationList) {
    return <div>없음</div>;
  }

  return (
    <S.SectionContainer>
      <S.SectionHeader>
        <S.SectionTitle>초대 내역</S.SectionTitle>
        <div>페이지네이션</div>
        <Button width="10rem" exceptionStyle={S.ButtonLayout}>
          <PlusIcon width={16} height={16} color={"#fff"} />
          초대하기
        </Button>
      </S.SectionHeader>
      <div>
        <S.InvitationText>이메일</S.InvitationText>
        <S.InvitationContainer>
          {invitationList.invitations.map(invitation => (
            <S.InvitationOne>
              <S.EmailText>{invitation.inviter.email}</S.EmailText>
              <Button styleVariant="white" exceptionStyle={AddButtonStyle}>
                취소
              </Button>
            </S.InvitationOne>
          ))}
        </S.InvitationContainer>
      </div>
    </S.SectionContainer>
  );
};

export default DashboardInvitation;
