import { MouseEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMembers } from "src/utils/api";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import UserProfile from "src/components/UserProfile/UserProfile";
import Button from "src/components/Button/Button";
import { GetMembersResponse } from "src/utils/apiResponseType";
import * as S from "./DashboardMemberStyled";

const DashboardMember = ({
  dashboardMemberList,
  dashboardId,
}: {
  dashboardMemberList: GetMembersResponse;
  dashboardId: number;
}) => {
  const queryClient = useQueryClient();
  const dashboardQuery = dashboardQueryKeys.members({ dashboardId: dashboardId, size: 4, page: 1 });
  const DeleteMemberMutation = useMutation({
    mutationFn: async (memberId: number) => await deleteMembers(memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: dashboardQuery.queryKey });
    },
  });

  function handleDeleteMember(event: MouseEvent<HTMLButtonElement>) {
    DeleteMemberMutation.mutate(Number(event.currentTarget.value));
  }
  return (
    <S.Container>
      <S.HeaderLayout>
        <S.Title>구성원</S.Title>
        <div>페이지 네이션 버튼</div>
      </S.HeaderLayout>
      <S.BodyLayout>
        <S.GridText>이름</S.GridText>
        <S.MemberContainr>
          {dashboardMemberList.members.map((member, index) => (
            <S.MemberOne>
              <UserProfile profileImageUrl={member.profileImageUrl} nickName={member.nickname} />
              {index !== 0 && (
                <Button onClick={handleDeleteMember} styleVariant="white" width={"8.4rem"} value={member.id}>
                  삭제
                </Button>
              )}
            </S.MemberOne>
          ))}
        </S.MemberContainr>
      </S.BodyLayout>
    </S.Container>
  );
};

export default DashboardMember;
