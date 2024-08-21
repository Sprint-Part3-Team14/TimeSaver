import { Control, FieldValues } from "react-hook-form";

export const getEmailInputProps = (control: Control<FieldValues>) => ({
  name: "email",
  control,
  label: "이메일",
  type: "text",
  placeholder: "이메일을 입력해주세요",
  rules: {
    required: "이메일을 입력해주세요!",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "이메일 형식으로 작성해주세요.",
    },
  },
});

export const getUsernameInputProps = (control: Control<FieldValues>) => ({
  name: "username",
  control,
  label: "닉네임",
  type: "text",
  placeholder: "닉네임을 입력해주세요",
  rules: {
    required: "닉네임을 입력해주세요!",
  },
});

export const getPasswordInputProps = (control: Control<FieldValues>) => ({
  name: "password",
  control,
  label: "비밀번호",
  type: "password",
  placeholder: "비밀번호를 입력해주세요",
  rules: {
    required: "비밀번호를 입력해주세요!",
    minLength: {
      value: 8,
      message: "8자 이상 작성해 주세요.",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "비밀번호는 8자 이상이어야 하며, 영어 대/소문자와 숫자를 적어도 1개 이상 포함해야 합니다.",
    },
  },
  showPasswordToggle: true,
});

export const getPasswordConfirmInputProps = (control: Control<FieldValues>, getValues: (field: string) => string) => ({
  name: "passwordConfirm",
  control,
  label: "비밀번호 확인",
  type: "password",
  placeholder: "비밀번호를 한번 더 입력해 주세요",
  rules: {
    required: "비밀번호 확인을 입력해주세요!",
    validate: (value: string) => value === getValues("password") || "비밀번호가 일치하지 않습니다.",
  },
  showPasswordToggle: true,
});
