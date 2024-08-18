import UserProfileImage from "./UserProfileImage/UserProfileImage";
import * as S from "./UserProfileStyled";

const UserProfile = ({
  profileImageUrl,
  nickName,
  AdditionalStyle,
}: {
  profileImageUrl: string | null;
  nickName: string;
  AdditionalStyle?: string;
}) => {
  return (
    <S.ProfileContainer AdditionalStyle={AdditionalStyle}>
      <UserProfileImage profileImageUrl={profileImageUrl} />
      <S.UserNickName>{nickName}</S.UserNickName>
    </S.ProfileContainer>
  );
};

export default UserProfile;
