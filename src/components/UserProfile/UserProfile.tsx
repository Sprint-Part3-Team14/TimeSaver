import UserProfileImage from "./UserProfileImage/UserProfileImage";
import * as S from "./UserProfileStyled";

const UserProfile = ({ profileImageUrl, nickName }: { profileImageUrl: string | null; nickName: string }) => {
  return (
    <S.ProfileContainer>
      <UserProfileImage profileImageUrl={profileImageUrl} />
      <S.UserNickName>{nickName}</S.UserNickName>
    </S.ProfileContainer>
  );
};

export default UserProfile;
