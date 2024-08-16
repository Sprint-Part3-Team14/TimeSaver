import * as S from "./UserProfileImageStyled";

const UserProfileImage = ({ profileImageUrl, size = "2.6rem" }: { profileImageUrl: string; size?: string }) => {
  return (
    <S.UserProfileImg
      alt="프로필 이미지"
      src={profileImageUrl ? profileImageUrl : "/images/default_profile_image.jpg"}
      size={size}
    />
  );
};

export default UserProfileImage;
