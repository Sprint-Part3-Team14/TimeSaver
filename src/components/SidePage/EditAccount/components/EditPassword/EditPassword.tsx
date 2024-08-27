import React from "react";
import { useForm, FieldValues } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import Button from "src/components/Button/Button";
import AuthInput from "src/components/AuthInput/AuthInput";
import {
  getCurrentPasswordInputProps,
  getPasswordConfirmInputProps,
  getPasswordInputProps,
} from "src/context/InputProps";
import { putAuthUpdatedPassword } from "src/utils/api";
import { ChangePassword } from "src/utils/apiType";
import * as C from "../../EditAcountStyled";
import * as S from "./EditPasswordStyled";

const EditPassword = () => {
  const { control, handleSubmit, setError, getValues } = useForm<FieldValues>({
    defaultValues: {
      currentPassword: "",
      password: "",
      passwordConfirm: "",
    },
  });

  const updatePasswordMutation = useMutation({
    mutationFn: async (data: ChangePassword) => await putAuthUpdatedPassword(data),
    onSuccess: () => {
      console.log("성공!");
    },
    onError: error => {
      console.error("비밀번호 변경 요청 중 오류가 발생했습니다:", error);
      setError("currentPassword", {
        type: "manual",
        message: "비밀번호 변경에 실패했습니다. 입력 내용을 확인해주세요.",
      });
    },
  });

  const handleOnSubmit = (data: any) => {
    updatePasswordMutation.mutate(data);
  };

  return (
    <C.FormLayout onSubmit={handleSubmit(handleOnSubmit)}>
      <C.TitleStyle>비밀번호 변경</C.TitleStyle>
      <S.PassWordInputBox>
        <AuthInput {...getCurrentPasswordInputProps(control)} />
      </S.PassWordInputBox>
      <S.PassWordInputBox>
        <AuthInput {...getPasswordInputProps(control)} />
      </S.PassWordInputBox>
      <S.PassWordInputBox>
        <AuthInput {...getPasswordConfirmInputProps(control, getValues)} />
      </S.PassWordInputBox>
      <Button type="submit" size="large" exceptionStyle={C.AddButtonStyle}>
        변경
      </Button>
    </C.FormLayout>
  );
};

export default EditPassword;
