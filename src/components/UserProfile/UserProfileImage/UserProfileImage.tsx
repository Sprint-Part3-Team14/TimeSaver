import { DEFAULT_PROFILEIMAGE_URL } from "src/constant/constant";
import * as S from "./UserProfileImageStyled";

const UserProfileImage = ({
  profileImageUrl,
  size = "2.6rem",
  addStyle,
}: {
  profileImageUrl: string | null;
  size?: string;
  addStyle?: string;
}) => {
  return (
    <S.UserProfileImg
      alt="프로필 이미지"
      src={profileImageUrl ? profileImageUrl : DEFAULT_PROFILEIMAGE_URL}
      size={size}
      addStyle={addStyle}
    />
  );
};

export default UserProfileImage;
