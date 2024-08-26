import { MouseEvent, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import PlusIcon from "src/components/Icons/PlusIcon";
import theme from "src/styles/theme";
import { MyProfileResponse, ProfileImageUploadResponse } from "src/utils/apiResponseType";
import Button from "src/components/Button/Button";
import useInputValue from "src/hooks/useInputValue";
import useInputImage from "src/hooks/useInputFile";
import { postMyProfile, putMyProfile } from "src/utils/api";
import { userQueryKeys } from "src/queryFactory/userQueryKeys";
import * as C from "../../EditAcountStyled";
import * as S from "./EditProfileStyled";
import type { FixProfile } from "src/utils/apiType";

const EditProfile = ({ userProfileData }: { userProfileData: MyProfileResponse }) => {
  const { value: newNickName, handleChangeValue, handleSetValue, handleResetValue } = useInputValue();
  const { imageUrl, handleImageChange, handleSetUrl } = useInputImage(({ file }: { file: File }) => {
    ProfileImageMutation.mutate(file);
  });
  const queryClient = useQueryClient();
  const userQuery = userQueryKeys.current();

  useEffect(() => {
    handleSetValue(userProfileData.nickname);
    handleSetUrl(userProfileData.profileImageUrl);
  }, []);

  function handleEditProfile(event: MouseEvent<HTMLFormElement | HTMLButtonElement>) {
    event.preventDefault();

    const data = {
      nickname: newNickName,
      profileImageUrl: imageUrl ? imageUrl : null,
    };

    EditProfileMutation.mutate(data);
  }

  const ProfileImageMutation = useMutation({
    mutationFn: async (imageFile: File): Promise<ProfileImageUploadResponse> => await postMyProfile(imageFile),
    onSuccess: data => {
      handleSetUrl(data.profileImageUrl);
    },
  });

  const EditProfileMutation = useMutation({
    mutationFn: async (body: FixProfile) => await putMyProfile(body),
    onSuccess: () => {
      handleResetValue();
      queryClient.invalidateQueries({ queryKey: userQuery.queryKey });
    },
  });

  return (
    <C.FormLayout>
      <C.TitleStyle>프로필 변경</C.TitleStyle>
      <S.ImageLabel htmlFor="profile-image">
        <S.IconBox>
          <PlusIcon width={35} height={35} color={theme.color.pink900} />
          {userProfileData.profileImageUrl && <S.ImageOverlay />}
        </S.IconBox>
        <S.ImageButton src={imageUrl} />
      </S.ImageLabel>
      <S.ImageInput type="file" id="profile-image" onChange={handleImageChange} />
      <S.UserEmailStyle>{userProfileData.email}</S.UserEmailStyle>
      <C.InputLabel>
        닉네임 변경
        <C.InputStyle placeholder="새로운 닉네임을 입력해주세요" value={newNickName} onChange={handleChangeValue} />
      </C.InputLabel>
      <Button onClick={handleEditProfile} type="button" size="large" exceptionStyle={C.AddButtonStyle}>
        저장
      </Button>
    </C.FormLayout>
  );
};

export default EditProfile;
