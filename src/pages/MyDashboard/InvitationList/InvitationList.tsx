import { useQuery } from "@tanstack/react-query";
import { userQueryKeys } from "src/queryFactory/userQueryKeys";
import InvitationDashboard from "./InvitationDashboard/InvitationDashboard";
import SearchBar from "./SearchBar/SearchBar";
import EmptyInvitation from "./EmptyInvitaiton/EmptyInvitation";
import * as S from "./InvitaionListStyled";

const InvitationList = () => {
  const { data: invitationList } = useQuery(userQueryKeys.invitationList);

  if (!invitationList) {
    return <div>없다잉</div>;
  }

  return (
    <S.Layout>
      <S.Title>초대받은 대시보드</S.Title>
      {invitationList.invitations.length > 0 ? (
        <>
          <SearchBar />
          <S.CategoryBox>
            <S.CategoryTitle>이름</S.CategoryTitle>
            <S.CategoryTitle>초대자</S.CategoryTitle>
            <S.CategoryTitle>수락여부</S.CategoryTitle>
          </S.CategoryBox>
          <S.ListContainer>
            {invitationList.invitations.map(invitation => (
              <InvitationDashboard
                key={invitation.id}
                dashboardTitle={invitation.dashboard.title}
                invite={invitation.inviter}
                invitationId={invitation.id}
              />
            ))}
          </S.ListContainer>
        </>
      ) : (
        <EmptyInvitation />
      )}
    </S.Layout>
  );
};

export default InvitationList;
