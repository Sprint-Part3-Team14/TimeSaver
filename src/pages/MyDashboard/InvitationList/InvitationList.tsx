import InvitationDashboard from "./InvitationDashboard/InvitationDashboard";
import SearchBar from "./SearchBar/SearchBar";

import * as S from "./InvitaionListStyled";
import EmptyInvitation from "./EmptyInvitaiton/EmptyInvitation";

const Invitation = [
  {
    id: 1,
    name: "대시보드1",
    invitor: "초대자1",
  },
  {
    id: 2,
    name: "대시보드2",
    invitor: "초대자2",
  },
  {
    id: 3,
    name: "대시보드3",
    invitor: "초대자3",
  },
  {
    id: 4,
    name: "대시보드4",
    invitor: "초대자4",
  },
  {
    id: 5,
    name: "대시보드5",
    invitor: "초대자5",
  },
];

const InvitationList = () => {
  return (
    <S.Layout>
      <S.Title>초대받은 대시보드</S.Title>
      {Invitation.length > 0 ? (
        <>
          <SearchBar />
          <S.CategoryBox>
            <S.CategoryTitle>이름</S.CategoryTitle>
            <S.CategoryTitle>초대자</S.CategoryTitle>
            <S.CategoryTitle>수락여부</S.CategoryTitle>
          </S.CategoryBox>
          <S.ListContainer>
            {Invitation.map(invite => (
              <InvitationDashboard invite={invite} />
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
