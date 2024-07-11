import React from "react";
import { Link } from "react-router-dom";
import Button from "../../Button/Button";
import { HeaderContainer, LogoContainer, NavLinks, Logo } from "./GuestNavStyled";


const GuestNav = () => {
  return (
    <HeaderContainer>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <NavLinks>
        <Link to="/signin">
          <Button styleVariant="default" size="normal" fontSize="small" width="10%">로그인</Button>
        </Link>
        <Link to="/signup">
          <Button styleVariant="default" size="normal" fontSize="small" width="10%">회원가입</Button>
        </Link>
      </NavLinks>
    </HeaderContainer>
  );
};

export default GuestNav;
