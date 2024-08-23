import React from "react";
import Button from "../../Button/Button";
import * as S from "./GuestNavStyled";

const GuestNav = () => {
  return (
    <S.HeaderContainer>
      <S.LogoContainer>
        <S.Logo />
      </S.LogoContainer>
      <S.NavLinks>
        <S.StyledLink to="/signin">
          <Button styleVariant="default" size="normal" fontSize="small" width="6rem">
            로그인
          </Button>
        </S.StyledLink>
        <S.StyledLink to="/signup">
          <Button styleVariant="default" size="normal" fontSize="small" width="8rem">
            회원가입
          </Button>
        </S.StyledLink>
      </S.NavLinks>
    </S.HeaderContainer>
  );
};

export default GuestNav;
