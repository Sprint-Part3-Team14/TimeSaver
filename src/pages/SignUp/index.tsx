import React from "react";
import { Controller, useForm } from "react-hook-form";
import AuthInput from "src/components/AuthInput/AuthInput";
import { useNavigate } from "react-router-dom";
import { postAuthRegister } from "src/utils/api";
import {
  getEmailInputProps,
  getPasswordConfirmInputProps,
  getPasswordInputProps,
  getUsernameInputProps,
} from "src/context/InputProps";
import Button from "../../components/Button/Button";
import * as S from "./SignUpStyled";

const SignUp = () => {
  const { handleSubmit, control, setError, getValues } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    if (!data.terms) {
      setError("terms", {
        type: "manual",
        message: "이용약관에 동의해주세요.",
      });
      return;
    }

    try {
      const response = await postAuthRegister(data);
      if (response) {
        navigate("/signin");
      } else {
        setError("email", {
          type: "manual",
          message: "회원 가입에 실패했습니다. 입력 내용을 확인해주세요.",
        });
      }
    } catch (error) {
      console.error("회원 가입 요청 중 오류가 발생했습니다:", error);
      setError("email", {
        type: "manual",
        message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      });
    }
  };

  return (
    <S.Container>
      <S.SignInfoBox />
      <S.SignUpBox>
        <S.SignLogoBox />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <AuthInput {...getEmailInputProps(control)} />
          <AuthInput {...getUsernameInputProps(control)} />
          <AuthInput {...getPasswordInputProps(control)} />
          <AuthInput {...getPasswordConfirmInputProps(control, getValues)} />
          <Controller
            name="terms"
            control={control}
            defaultValue={false}
            render={({ field }) => (
              <S.CheckboxContainer>
                <input type="checkbox" id="terms" {...field} />
                <label htmlFor="terms">이용약관에 동의합니다.</label>
              </S.CheckboxContainer>
            )}
          />
          <S.ButtonWrapper>
            <Button type="submit" size="large" fontSize="small">
              가입하기
            </Button>
          </S.ButtonWrapper>
        </S.Form>
        <S.FooterText>
          이미 가입하셨나요? <S.SignInLink onClick={() => navigate("/signin")}>로그인하기</S.SignInLink>
        </S.FooterText>
      </S.SignUpBox>
    </S.Container>
  );
};

export default SignUp;
