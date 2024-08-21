import React, { useState } from "react";
import { Controller, Control } from "react-hook-form";
import * as S from "./AuthInputStyled";

interface AuthInputProps {
  name: string;
  control: Control<any>;
  label: string;
  placeholder: string;
  type: string;
  rules: any;
  showPasswordToggle?: boolean;
}

const AuthInput = ({ name, control, label, placeholder, type, rules, showPasswordToggle = false }: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <S.Wrapper>
      <S.Label htmlFor={name}>{label}</S.Label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => (
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
            {fieldState.invalid && fieldState.error?.message && (
              <S.ErrorMessage>{fieldState.error.message}</S.ErrorMessage>
            )}
          </>
        )}
      />
    </S.Wrapper>
  );
};

export default AuthInput;
