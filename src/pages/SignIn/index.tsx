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
    <form onSubmit={handleSubmit(onSubmit)}>
      <AuthInput inputProps={emailInputProps} />
      <AuthInput inputProps={passwordInputProps} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
