import UserProfile from "src/components/UserProfile/UserProfile";
import Button from "src/components/Button/Button";
import { GetMembersResponse } from "src/utils/apiResponseType";
import * as S from "./DashboardMemberStyled";

const DashboardMember = ({ dashboardMemberList }: { dashboardMemberList: GetMembersResponse }) => {
  return (
    <S.Container>
      <S.HeaderLayout>
        <S.Title>구성원</S.Title>
        <div>페이지 네이션 버튼</div>
      </S.HeaderLayout>
      <S.BodyLayout>
        <S.GridText>이름</S.GridText>
        {dashboardMemberList.members.map(member => (
          <S.MemberOne>
            <UserProfile profileImageUrl={member.profileImageUrl} nickName={member.nickname} />
            <Button styleVariant="white" width={"8.4rem"}>
              삭제
            </Button>
          </S.MemberOne>
        ))}
      </S.BodyLayout>
    </S.Container>
  );
};

export default DashboardMember;
