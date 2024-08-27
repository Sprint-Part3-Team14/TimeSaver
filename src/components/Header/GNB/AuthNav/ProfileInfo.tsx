import React, { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getUserProfile } from "src/utils/api";
import Members from "./Members";
import * as S from "./ProfileInfoStyled";
import ProfilePopup from "./ProfilePopup";

interface UserProfile {
  id: number;
  nickname: string;
  profileImageUrl: string | null;
}

const ProfileInfo = () => {
  const [myProfile, setMyProfile] = useState<UserProfile | null>(null);

  const { mutate: fetchProfile } = useMutation({
    mutationFn: async () => await getUserProfile(),
    onSuccess: data => {
      if (data) {
        setMyProfile(data);
      } else {
        console.error("Failed to fetch user profile.");
      }
    },
    onError: error => {
      console.error("Error fetching profile data:", error);
    },
  });

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  if (!myProfile) {
    return null;
  }

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
