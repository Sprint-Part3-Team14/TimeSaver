import { useNavigate } from "react-router-dom";
import { deleteCookie } from "src/utils/CookieSetting";
import Button from "src/components/Button/Button";
import * as S from "./ProfilePopupStyled";

const ProfilePopup = () => {
  const navigate = useNavigate();

  function handleLogout() {
    deleteCookie;
    navigate("/signin");
  }

  return (
    <S.PopupButtonContainer>
      <Button styleVariant="white" exceptionStyle={S.ButtonStyle}>
        계정 관리
      </Button>
      <Button styleVariant="white" exceptionStyle={S.ButtonStyle} onClick={handleLogout}>
        로그아웃
      </Button>
    </S.PopupButtonContainer>
  );
};

export default ProfilePopup;
