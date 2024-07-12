import Button from "../../../components/Button/Button";
import * as S from "./ChangePasswordStyled";

const ChangePassword = () => {
  return (
    <S.Layout>
      <S.Title>비밀번호 변경</S.Title>
      <S.InputContainer>
        <S.InputBox>
          <S.Label>현재 비밀번호</S.Label>
          <S.Input />
        </S.InputBox>
        <S.InputBox>
          <S.Label>새 비밀번호</S.Label>
          <S.Input />
        </S.InputBox>
        <S.InputBox>
          <S.Label>새 비밀번호 확인</S.Label>
          <S.Input />
        </S.InputBox>
      </S.InputContainer>
      <S.ButtonBox>
        <Button>변경</Button>
      </S.ButtonBox>
    </S.Layout>
  );
};

export default ChangePassword;
