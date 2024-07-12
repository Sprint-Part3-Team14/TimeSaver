import AuthNav from "./GNB/AuthNav";
import GuestNav from "./GNB/GuestNav";
import { Nav } from "./OptionalHeaderStyled";

const OptionalHeader = () => {
  // auth 를 통해서 쿠키 값이 있는 지 없는지 체크
  const session = true; // 임의의 값

  return (
    <Nav>
      {session ? <AuthNav/> : <GuestNav/>}
    </Nav>
  );
};

export default OptionalHeader;