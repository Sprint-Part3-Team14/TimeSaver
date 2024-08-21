import React from "react";
import { useForm, Controller } from "react-hook-form";
import AuthInput from "src/components/AuthInput/AuthInput";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { postAuthRegister } from "src/utils/api";
import { SignUp } from "src/utils/apiType";
import Button from "../../components/Button/Button";
import * as S from "./SignUpStyled";

const SignUp = () => {
  const { handleSubmit, control, setError, getValues } = useForm();
  const navigate = useNavigate();

  const mutation = useMutation(postAuthRegister, {
    onSuccess: (response: { success: any }) => {
      if (response && response.success) {
        navigate("/my-dashboard");
      } else {
        setError("email", {
          type: "manual",
          message: "회원 가입에 실패했습니다. 입력 내용을 확인해주세요.",
        });
      }
    },
    onError: (error: any) => {
      console.error("회원 가입 요청 중 오류가 발생했습니다:", error);
      setError("email", {
        type: "manual",
        message: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      });
    },
  });

  const onSubmit = (data: SignUp) => {
    if (!data.terms) {
      setError("terms", {
        type: "manual",
        message: "이용약관에 동의해주세요.",
      });
      return;
    }

    mutation.mutate(data);
  };

  return (
    <S.Container>
      <S.SignInfoBox />
      <S.SignUpBox>
        <S.SignLogoBox />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <AuthInput
            name="email"
            control={control}
            label="이메일"
            type="text"
            placeholder="이메일을 입력해주세요"
            rules={{
              required: "이메일을 입력해주세요!",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "이메일 형식으로 작성해주세요.",
              },
            }}
          />
          <AuthInput
            name="username"
            control={control}
            label="닉네임"
            type="text"
            placeholder="닉네임을 입력해주세요"
            rules={{
              required: "닉네임을 입력해주세요!",
            }}
          />
          <AuthInput
            name="password"
            control={control}
            label="비밀번호"
            type="password"
            placeholder="비밀번호를 입력해주세요"
            rules={{
              required: "비밀번호를 입력해주세요!",
              minLength: {
                value: 8,
                message: "8자 이상 작성해 주세요.",
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                message: "비밀번호는 8자 이상이어야 하며, 영어 대/소문자와 숫자를 적어도 1개 이상 포함해야 합니다.",
              },
            }}
            showPasswordToggle={true}
          />
          <AuthInput
            name="passwordConfirm"
            control={control}
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호를 한번 더 입력해 주세요"
            rules={{
              required: "비밀번호 확인을 입력해주세요!",
              validate: (value: string) => value === getValues("password") || "비밀번호가 일치하지 않습니다.",
            }}
            showPasswordToggle={true}
          />
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
