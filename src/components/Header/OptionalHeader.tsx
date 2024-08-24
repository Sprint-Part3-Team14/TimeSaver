import { getCookie } from "src/utils/CookieSetting";
import AuthNav from "./GNB/AuthNav";
import GuestNav from "./GNB/GuestNav";
import * as S from "./OptionalHeaderStyled";

const OptionalHeader = () => {
  const accessToken = getCookie("accessToken");

  return <S.Nav>{accessToken ? <AuthNav /> : <GuestNav />}</S.Nav>;
};

export default OptionalHeader;
