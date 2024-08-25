import { MyProfileResponse } from "src/utils/apiResponseType";
import PlusIcon from "src/components/Icons/PlusIcon";
import theme from "src/styles/theme";
import Button from "src/components/Button/Button";
import { SidePageHeader, SidePageLayout } from "../SidePage";
import * as S from "./EditAcountStyled";

const EditAccount = ({
  handleClose,
  userProfileData,
}: {
  handleClose: () => void;
  userProfileData: MyProfileResponse;
}) => {
  return (
    <SidePageLayout handleClose={handleClose} addStyle={S.PageSetting}>
      <SidePageHeader handleClosing={handleClose} addStyle={S.AddHeaderStyle}>
        <S.PageTitleStyle>계정 관리</S.PageTitleStyle>
      </SidePageHeader>
      <S.Container>
        <S.FormLayout>
          <S.TitleStyle>프로필 변경</S.TitleStyle>
          <S.ImageLabel htmlFor="profile-image">
            <S.IconBox>
              <PlusIcon width={35} height={35} color={theme.color.pink900} />
            </S.IconBox>
            <S.ImageButton />
          </S.ImageLabel>
          <S.ImageInput type="file" id="profile-image" />
          <S.UserEmailStyle>{userProfileData.email}</S.UserEmailStyle>
          <S.InputLabel>
            닉네임 변경
            <S.InputStyle placeholder="새로운 닉네임을 입력해주세요" value={userProfileData.nickname} />
          </S.InputLabel>
          <Button type="button" size="large" exceptionStyle={S.AddButtonStyle}>
            저장
          </Button>
        </S.FormLayout>
        <S.FormLayout>
          <S.TitleStyle>비밀번호 변경</S.TitleStyle>
          <S.PassWordInputBox>
            현재 비밀번호
            <S.InputStyle placeholder="현재 비밀번호 입력" />
          </S.PassWordInputBox>
          <S.PassWordInputBox>
            새 비밀번호
            <S.InputStyle placeholder="새 비밀번호 입력" />
          </S.PassWordInputBox>
          <S.PassWordInputBox>
            새 비밀번호 확인
            <S.InputStyle placeholder="새 비밀번호 입력" />
          </S.PassWordInputBox>
          <Button type="button" size="large" exceptionStyle={S.AddButtonStyle}>
            변경
          </Button>
        </S.FormLayout>
      </S.Container>
    </SidePageLayout>
  );
};

export default EditAccount;
