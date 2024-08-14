import AuthInput from "src/components/AuthInput/AuthInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../../components/Button/Button";

const Signin = () => {
  const { handleSubmit, control } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const passwordInputProps = {
    name: "password",
    control: control,
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    rules: { required: "Password is required" },
    showPasswordToggle: true,
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AuthInput
          name="email"
          control={control}
          label="이메일"
          type="text"
          placeholder="Enter your email"
          rules={{
            required: "이메일을 입력해주세요.", // 필수 입력 필드 지정.
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
          placeholder="Enter your password"
          rules={{
            required: "비밀번호를 입력해주세요",
            minLength: {
              value: 8,
              message: "8자 이상 작성해 주세요.",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "비밀번호는 8자 이상이어야하며, 영어 대/소문자와 숫자를 적어도 1개 이상 포함해야 합니다.",
            },
          }}
          showPasswordToggle={true}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Button> 로그인 </Button>
      </form>
    </div>
  );
};

export default LoginForm;
