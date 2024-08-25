import { MouseEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "src/components/Button/Button";
import { putInvitations } from "src/utils/api";
import { ResponseInvitation } from "src/utils/apiType";
import { userQueryKeys } from "src/queryFactory/userQueryKeys";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import * as S from "./InvitationDahsboardStyled";
import type { InviterResponse } from "src/utils/apiResponseType";

const InvitationDashboard = ({ invite, invitationId }: { invite: InviterResponse; invitationId: number }) => {
  const queryClient = useQueryClient();
  const invitationQuery = userQueryKeys.invitationList;
  const dashboardListQuery = dashboardQueryKeys.list({ navigationMethod: "pagination" });
  const InvitationAnswerMutation = useMutation({
    mutationFn: async ({ invitationId, body }: { invitationId: number; body: ResponseInvitation }) =>
      await putInvitations(invitationId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: invitationQuery.queryKey });
      queryClient.invalidateQueries({ queryKey: dashboardListQuery.queryKey });
    },
  });

  function handleAnswerInvitation(event: MouseEvent<HTMLButtonElement>) {
    InvitationAnswerMutation.mutate({
      invitationId: invitationId,
      body: { inviteAccepted: !!+event.currentTarget.value },
    });
  }
  return (
    <S.InvitationDashboardBox>
      <S.Name>{invite.nickname}</S.Name>
      <S.Invitor>{invite.email}</S.Invitor>
      <S.ButtonBox>
        <Button onClick={handleAnswerInvitation} value={1}>
          수락
        </Button>
        <Button onClick={handleAnswerInvitation} value={0} styleVariant="white">
          거절
        </Button>
      </S.ButtonBox>
    </S.InvitationDashboardBox>
  );
};

export default InvitationDashboard;
