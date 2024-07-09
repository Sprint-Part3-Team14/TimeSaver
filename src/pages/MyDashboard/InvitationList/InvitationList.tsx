import InvitationDashboard from "./InvitationDashboard/InvitationDashboard";
import SearchBar from "./SearchBar/SearchBar";

import * as S from "./InvitaionListStyled";

const InvitationList = () => {
  return (
    <S.Layout>
      <S.Title>초대받은 대시보드</S.Title>
      <SearchBar />
      <S.CategoryBox>
        <h2>이름</h2>
        <h2>초대자</h2>
        <h2>수락여부</h2>
      </S.CategoryBox>
      <S.ListContainer>
        <InvitationDashboard />
        <InvitationDashboard />
      </S.ListContainer>
    </S.Layout>
  );
};

export default InvitationList;
