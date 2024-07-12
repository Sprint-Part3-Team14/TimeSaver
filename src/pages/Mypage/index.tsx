import ChangePassword from "./ChangePassword/ChangePassword";
import MyProfile from "./MyProfile/MyProfile";
import ReturnButton from "./ReturnButton/ReturnButton";

import * as S from "./MyPageStyled";

const MyPage = () => {
  return (
    <S.Layout>
      <ReturnButton />
      <MyProfile />
      <ChangePassword />
    </S.Layout>
  );
};

export default MyPage;
