import React from "react";
import { useNavigate } from "react-router-dom";

import { deleteCookie } from "src/utils/CookieSetting";
import Button from "../../../../Button/Button";
import * as S from "./ProfilePopupStyled";

const ProfilePopup = () => {
  const navigate = useNavigate();

  const goMyPage = () => {
    navigate("/account-menu");
  };

  const logout = () => {
    deleteCookie;
    navigate("/signin");
  };

  return (
    <S.ProfilePopupContainer className="profile-popup">
      <S.PopupContent>
        <Button onClick={goMyPage} styleVariant="default" size="normal" fontSize="small" width="100%">
          마이 페이지
        </Button>
        <Button onClick={logout} styleVariant="default" size="normal" fontSize="small" width="100%">
          로그아웃
        </Button>
      </S.PopupContent>
    </S.ProfilePopupContainer>
  );
};

export default ProfilePopup;
