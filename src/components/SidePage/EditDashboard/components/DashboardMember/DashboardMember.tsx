import { useState, MouseEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMembers } from "src/utils/api";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import UserProfile from "src/components/UserProfile/UserProfile";
import Button from "src/components/Button/Button";
import { GetMembersResponse } from "src/utils/apiResponseType";
import Pagination from "src/components/PagiNation/PagiNation";
import * as S from "./DashboardMemberStyled";

const DashboardMember = ({
  dashboardMemberList,
  dashboardId,
}: {
  dashboardMemberList: GetMembersResponse;
  dashboardId: number;
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 4;

  const queryClient = useQueryClient();

  // 멤버 삭제 처리 로직
  const DeleteMemberMutation = useMutation({
    mutationFn: async (memberId: number) => await deleteMembers(memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: dashboardQueryKeys.members({ dashboardId, size: pageSize, page: currentPage }).queryKey,
      });
    },
  });

  function handleDeleteMember(event: MouseEvent<HTMLButtonElement>) {
    DeleteMemberMutation.mutate(Number(event.currentTarget.value));
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // 페이지별로 데이터 필터링
  const startIdx = (currentPage - 1) * pageSize;
  const paginatedMembers = dashboardMemberList.members.slice(startIdx, startIdx + pageSize);

  return (
    <S.Container>
      <S.HeaderLayout>
        <S.Title>구성원</S.Title>
        <Pagination
          currentPage={currentPage}
          totalPages={Math.ceil((dashboardMemberList.totalCount || 0) / pageSize)}
          onPageChange={handlePageChange}
        />
      </S.HeaderLayout>
      <S.BodyLayout>
        <S.GridText>이름</S.GridText>
        <S.MemberContainer>
          {paginatedMembers.map((member, index) => (
            <S.MemberOne key={member.id}>
              <UserProfile profileImageUrl={member.profileImageUrl} nickName={member.nickname} />
              {index !== 0 && (
                <Button
                  onClick={handleDeleteMember}
                  styleVariant="white"
                  value={member.id}
                  exceptionStyle={S.AddButtonStyle}>
                  삭제
                </Button>
              )}
            </S.MemberOne>
          ))}
        </S.MemberContainer>
      </S.BodyLayout>
    </S.Container>
  );
};

export default DashboardMember;
