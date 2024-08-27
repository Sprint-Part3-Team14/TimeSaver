import { getCookie } from "src/utils/CookieSetting";
import AuthNav from "./GNB/AuthNav/AuthNav";
import GuestNav from "./GNB/GuestNav/GuestNav";

const OptionalHeader = () => {
  const accessToken = getCookie("accessToken");

  return <>{accessToken ? <AuthNav /> : <GuestNav />}</>;
};

export default OptionalHeader;
