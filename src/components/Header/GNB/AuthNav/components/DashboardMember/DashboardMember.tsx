import UserProfileImage from "src/components/UserProfile/UserProfileImage/UserProfileImage";
import * as S from "./DashboardMemberStyled";
import type { GetMembersResponse } from "src/utils/apiResponseType";

const DashboardMember = ({ memberList }: { memberList: GetMembersResponse }) => {
  return (
    <S.MemberContainer>
      {memberList.members.map((member, index) => {
        if (index < 4) {
          return <UserProfileImage profileImageUrl={member.profileImageUrl} addStyle={S.AddProfileStyle} />;
        }
      })}
      <S.PlusMember totalCount={memberList.totalCount} />
    </S.MemberContainer>
  );
};

export default DashboardMember;
