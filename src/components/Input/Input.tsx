import React, { InputHTMLAttributes, ReactNode } from "react";
import { InputWrapper, Label, StyledInput } from "./InputStyles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  children?: ReactNode;
}

const Input = ({ label, children, ...props }: InputProps) => {
  return (
    <InputWrapper>
      <Label>{label}</Label>
      <StyledInput {...props} />
      {children}
    </InputWrapper>
  );
};

export default Input;
