import PlusIcon from "src/components/Icons/PlusIcon";
import theme from "src/styles/theme";
import { MyProfileResponse } from "src/utils/apiResponseType";
import Button from "src/components/Button/Button";
import * as C from "../../EditAcountStyled";
import * as S from "./EditProfileStyled";

const EditProfile = ({ userProfileData }: { userProfileData: MyProfileResponse }) => {
  return (
    <C.FormLayout>
      <C.TitleStyle>프로필 변경</C.TitleStyle>
      <S.ImageLabel htmlFor="profile-image">
        <S.IconBox>
          <PlusIcon width={35} height={35} color={theme.color.pink900} />
        </S.IconBox>
        <S.ImageButton />
      </S.ImageLabel>
      <S.ImageInput type="file" id="profile-image" />
      <S.UserEmailStyle>{userProfileData.email}</S.UserEmailStyle>
      <C.InputLabel>
        닉네임 변경
        <C.InputStyle placeholder="새로운 닉네임을 입력해주세요" value={userProfileData.nickname} />
      </C.InputLabel>
      <Button type="button" size="large" exceptionStyle={C.AddButtonStyle}>
        저장
      </Button>
    </C.FormLayout>
  );
};

export default EditProfile;
