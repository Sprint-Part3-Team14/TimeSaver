import { getCookie } from "src/utils/CookieSetting";
import AuthNav from "./GNB/AuthNav";
import GuestNav from "./GNB/GuestNav";
import { Nav } from "./OptionalHeaderStyled";

const OptionalHeader = () => {
  const accessToken = getCookie("accessToken");

  return <Nav>{accessToken ? <AuthNav /> : <GuestNav />}</Nav>;
};

export default OptionalHeader;
