import { DEFAULT_PROFILEIMAGE_URL } from "src/constant/constant";
import * as S from "./UserProfileImageStyled";

const UserProfileImage = ({ profileImageUrl, size = "2.6rem" }: { profileImageUrl: string | null; size?: string }) => {
  return (
    <S.UserProfileImg
      alt="프로필 이미지"
      src={profileImageUrl ? profileImageUrl : DEFAULT_PROFILEIMAGE_URL}
      size={size}
    />
  );
};

export default UserProfileImage;
