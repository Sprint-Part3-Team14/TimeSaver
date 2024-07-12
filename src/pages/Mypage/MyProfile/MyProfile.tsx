import Button from "../../../components/Button/Button";
import AddIcon from "../../../components/Icons/AddIcon";
import * as S from "./MyprofileStyled";

const MyProfile = () => {
  return (
    <S.Layout>
      <S.Title>프로필</S.Title>
      <S.Container>
        <S.UploadImageBox>
          <AddIcon width={30} height={30} color="#FF7B7B" />
        </S.UploadImageBox>
        <S.InputContainer>
          <S.InputBox>
            <S.Label>이메일</S.Label>
            <S.Input />
          </S.InputBox>
          <S.InputBox>
            <S.Label>닉네임</S.Label>
            <S.Input />
          </S.InputBox>
        </S.InputContainer>
      </S.Container>
      <S.ButtonBox>
        <Button>저장</Button>
      </S.ButtonBox>
    </S.Layout>
  );
};

export default MyProfile;
