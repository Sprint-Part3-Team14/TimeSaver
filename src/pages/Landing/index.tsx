"use client";
import { useQuery } from "@tanstack/react-query";
import EditAccount from "src/components/SidePage/EditAccount/EditAcount";
import useToggle from "src/hooks/useToggle";
import { userQueryKeys } from "src/queryFactory/userQueryKeys";
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
  postAuthLogin({ email: "test@codeit.com", password: "sprint101" });
  const { isTrue, handleTrue, handleFalse } = useToggle();
  const { data: currentUser } = useQuery(userQueryKeys.current());

  return (
    <>
      {isTrue && <EditAccount handleClose={handleFalse} userProfileData={currentUser} />}
      <button type="button" onClick={handleTrue}>
        등장
      </button>
      <div onClick={loginTest}>로그인</div>
      <div onClick={logout}>로그아웃</div>
    </>
  );
};

export default Page;
