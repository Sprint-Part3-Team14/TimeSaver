import UserProfileImage from "./UserProfileImage/UserProfileImage";
import * as S from "./UserProfileStyled";

const UserProfile = ({
  profileImageUrl,
  nickName,
  addStyle,
  ImageAddStyle,
}: {
  profileImageUrl: string | null;
  nickName: string;
  addStyle?: string;
  ImageAddStyle?: string;
}) => {
  return (
    <S.ProfileContainer addStyle={addStyle}>
      <UserProfileImage profileImageUrl={profileImageUrl} addStyle={ImageAddStyle} />
      {nickName}
    </S.ProfileContainer>
  );
};

export default UserProfile;
