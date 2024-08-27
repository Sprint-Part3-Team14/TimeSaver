import React from "react";
import { useNavigate } from "react-router-dom";

import { deleteCookie } from "src/utils/CookieSetting";
import Button from "../../../Button/Button";
import * as S from "./ProfilePopupStyled";

const ProfilePopup = () => {
  const navigate = useNavigate();

  const handleGoMyPage = () => {
    navigate("/account-menu");
  };

  const handleLogout = () => {
    deleteCookie;
    navigate("/signin");
  };

  return (
    <S.ProfilePopupContainer className="profile-popup">
      <S.PopupContent>
        <Button onClick={handleGoMyPage} styleVariant="default" size="normal" fontSize="small" width="100%">
          마이 페이지
        </Button>
        <Button onClick={handleLogout} styleVariant="default" size="normal" fontSize="small" width="100%">
          로그아웃
        </Button>
      </S.PopupContent>
    </S.ProfilePopupContainer>
  );
};

export default ProfilePopup;
