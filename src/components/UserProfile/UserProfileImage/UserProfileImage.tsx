import { ImgHTMLAttributes } from "react";
import { DEFAULT_PROFILEIMAGE_URL } from "src/constant/constant";
import * as S from "./UserProfileImageStyled";

interface I_UserProfileImageProp extends ImgHTMLAttributes<HTMLImageElement> {
  profileImageUrl: string | null;
  size?: string;
  addStyle?: string;
}

const UserProfileImage = ({ profileImageUrl, size = "2.6rem", addStyle }: I_UserProfileImageProp) => {
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
