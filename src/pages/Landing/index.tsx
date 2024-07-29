"use client";
import React from "react";
import { logout, postAuthLogin } from "src/utils/api";
import { SignIn } from "src/utils/apiType";

const Page = () => {
  const loginTest = async () => {
    const body: SignIn = {
      email: "test@naver.com",
      password: "qwer1234",
    };
    const res = await postAuthLogin(body);
    console.log(res);
  };

  return (
    <>
      <div onClick={loginTest}>로그인</div>
      <div onClick={logout}>로그아웃</div>
    </>
  );
};

export default Page;
