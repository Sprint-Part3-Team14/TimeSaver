import React from "react";
import { useForm } from "react-hook-form";
import AuthInput from "src/components/AuthInput/AuthInput";
import { postAuthLogin } from "src/utils/api";
import { useNavigate } from "react-router-dom";
import { getEmailInputProps, getPasswordInputProps } from "src/context/InputProps";
import Button from "../../components/Button/Button";
import * as S from "./SignInStyled";

const SignIn = () => {
  const { handleSubmit, control, setError } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response = await postAuthLogin(data);
      if (response && response.accessToken) {
        navigate("/my-dashboard");
      } else {
        setError("password", {
          type: "manual",
          message: "로그인에 실패했습니다. 이메일 또는 비밀번호를 확인해주세요.",
        });
      }
    } catch (error) {
      console.error("로그인 요청 중 오류가 발생했습니다:", error);
      setError("password", {
        type: "manual",
        message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      });
    }
  };

  return (
    <S.Container>
      <S.SignInfoBox />
      <S.SignInBox>
        <S.SignLogoBox />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <AuthInput {...getEmailInputProps(control)} />
          <AuthInput {...getPasswordInputProps(control)} />
          <S.ButtonWrapper>
            <Button type="submit" size="large" fontSize="small">
              로그인
            </Button>
          </S.ButtonWrapper>
        </S.Form>
        <S.FooterText>
          회원이 아니신가요? <S.SignUpLink onClick={() => navigate("/signup")}>회원 가입하기</S.SignUpLink>
        </S.FooterText>
      </S.SignInBox>
    </S.Container>
  );
};

export default SignIn;
