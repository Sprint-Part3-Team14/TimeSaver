import React, { useEffect, useState } from "react";
import { Controller, Control } from "react-hook-form";
import * as S from "./AuthInputStyled";

interface InputFieldProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder: string;
  type: string;
  rules: any;
  showPasswordToggle?: boolean;
}

interface AuthInputProps {
  inputProps: InputFieldProps;
}

const AuthInput = ({ inputProps }: AuthInputProps) => {
  const { name, control, label, placeholder, rules, type, showPasswordToggle = false } = inputProps;
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (errorMessage) {
      alert(errorMessage);
    }
  }, [errorMessage]);

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => {
          if (fieldState.invalid && fieldState.error?.message) {
            setErrorMessage(fieldState.error.message);
          } else {
            setErrorMessage(null);
          }

          return (
            <>
              <S.Input
                {...field}
                type={showPasswordToggle && showPassword ? "text" : type}
                placeholder={placeholder}
                isInvalid={fieldState.invalid}
              />
              {showPasswordToggle && (
                <S.ToggleButton onClick={() => setShowPassword(!showPassword)}>
                  <img
                    src={showPassword ? "/images/Icons/visible_eye.svg" : "/images/Icons/hidden_eye.svg"}
                    alt="Toggle password visibility"
                    width={20}
                    height={20}
                  />
                </S.ToggleButton>
              )}
            </>
          );
        }}
      />
    </S.Wrapper>
  );
};

export default AuthInput;
