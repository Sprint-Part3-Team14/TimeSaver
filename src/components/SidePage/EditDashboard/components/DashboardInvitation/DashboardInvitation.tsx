import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import Button from "src/components/Button/Button";
import PlusIcon from "src/components/Icons/PlusIcon";
import Pagination from "src/components/PagiNation/PagiNation";
import { deleteDashboardInvitations } from "src/utils/api";
import { AddButtonStyle } from "../DashboardMember/DashboardMemberStyled";
import * as S from "./DashboardInvitationStyled";

const DashboardInvitation = ({ dashboardId }: { dashboardId: number }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;
  const queryClient = useQueryClient();

  const { data: invitationList } = useQuery(
    dashboardQueryKeys.invitations(dashboardId, { size: pageSize, page: currentPage })
  );
  const cancelInvitaionMutation = useMutation({
    mutationFn: async (invitationId: number) => deleteDashboardInvitations(dashboardId, invitationId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: dashboardQueryKeys.invitations(dashboardId, { size: pageSize, page: currentPage }).queryKey,
      });
    },
  });

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (!invitationList) {
    return <div>없음</div>;
  }

  return (
    <S.SectionContainer>
      <S.SectionHeader>
        <S.SectionTitle>초대 내역</S.SectionTitle>
        <Button width="10rem" exceptionStyle={S.ButtonLayout}>
          <PlusIcon width={16} height={16} color={"#fff"} />
          초대하기
        </Button>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil((invitationList.totalCount || 0) / pageSize)}
          onPageChange={handlePageChange}
        />
      </S.SectionHeader>
      <div>
        <S.InvitationText>이메일</S.InvitationText>
        <S.InvitationContainer>
          {invitationList.invitations.map(invitation => (
            <S.InvitationOne key={invitation.id}>
              <S.EmailText>{invitation.invitee.email}</S.EmailText>
              <Button
                styleVariant="white"
                exceptionStyle={AddButtonStyle}
                onClick={() => {
                  cancelInvitaionMutation.mutate(invitation.id);
                }}>
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
