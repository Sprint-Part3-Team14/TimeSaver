import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthInput from "src/components/AuthInput/AuthInput";
import { postAuthLogin } from "src/utils/api";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import * as S from "./SignInStyled";

const SignIn = () => {
  const { handleSubmit, control, setError } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response = await postAuthLogin(data);
      if (response && response.accessToken) {
        console.log("ture");
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
            showPassword={showPassword}
            setShowPassword={setShowPassword}
          />
          <Button> 로그인 </Button>
        </S.Form>
      </S.SignInBox>
    </S.Container>
  );
};

export default SignIn;
