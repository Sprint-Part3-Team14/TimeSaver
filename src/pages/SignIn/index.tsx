import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import AuthInput from "../../components/AuthInput/AuthInput";

interface IFormInput {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { control, handleSubmit } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);

  const emailInputProps = {
    name: "email",
    control: control,
    label: "Email",
    placeholder: "Enter your email",
    type: "email",
    rules: { required: "Email is required" },
    showPasswordToggle: false,
  };

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
          label="Email"
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
          label="Password"
          type="password"
          placeholder="Enter your password"
          rules={{
            required: "비밀번호를 입력해주세요",
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
              message: "비밀번호는 8자 이상이며, 영어 대/소문자와 숫자를 적어도 1개 이상 포함해야 합니다.",
            },
          }}
          showPasswordToggle={true}
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
