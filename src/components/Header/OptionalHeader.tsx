import { useLocation } from "react-router-dom";
import { getCookie } from "src/utils/CookieSetting";
import AuthNav from "./GNB/AuthNav/AuthNav";
import GuestNav from "./GNB/GuestNav/GuestNav";

const OptionalHeader = () => {
  const accessToken = getCookie("accessToken");
  const location = useLocation();

  return <>{accessToken ? <AuthNav isLanding={location.pathname === "/"} /> : <GuestNav />}</>;
};

export default OptionalHeader;
