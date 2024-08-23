import React from "react";
import Members from "./Members";
import * as S from "./ProfileInfoStyled";
import ProfilePopup from "./ProfilePopup";

const ProfileInfo = () => {
  const loginInfo = {
    id: 1,
    nickname: "한태욱",
    profileImageUrl: "",
  };
  const myProfile = {
    id: loginInfo.id,
    nickname: loginInfo.nickname,
    profileImageUrl: loginInfo.profileImageUrl,
  };

  return (
    <S.ProfileInfoContainer>
      <S.ProfileLink to="/my-invitation">
        <Members members={[myProfile]} totalCount={1} />
        <S.NicknameText>{myProfile.nickname}</S.NicknameText>
      </S.ProfileLink>
      <ProfilePopup />
    </S.ProfileInfoContainer>
  );
};

export default ProfileInfo;
