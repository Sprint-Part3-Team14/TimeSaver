import Button from "src/components/Button/Button";
import * as C from "../../EditAcountStyled";
import * as S from "./EditPasswordStyled";

const EditPassword = () => {
  return (
    <C.FormLayout>
      <C.TitleStyle>비밀번호 변경</C.TitleStyle>
      <S.PassWordInputBox>
        현재 비밀번호
        <C.InputStyle placeholder="현재 비밀번호 입력" />
      </S.PassWordInputBox>
      <S.PassWordInputBox>
        새 비밀번호
        <C.InputStyle placeholder="새 비밀번호 입력" />
      </S.PassWordInputBox>
      <S.PassWordInputBox>
        새 비밀번호 확인
        <C.InputStyle placeholder="새 비밀번호 입력" />
      </S.PassWordInputBox>
      <Button type="button" size="large" exceptionStyle={C.AddButtonStyle}>
        변경
      </Button>
    </C.FormLayout>
  );
};

export default EditPassword;
