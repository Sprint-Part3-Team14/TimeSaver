import { useNavigate } from "react-router-dom";
import Button from "src/components/Button/Button";
import { LinkStyle, Logo } from "src/components/Header/HeaderCommonStyle";
import * as S from "./GuestNavStyled";

const GuestNav = () => {
  const navigate = useNavigate();
  return (
    <S.HeaderBox isLanding={true}>
      <LinkStyle to="/">
        <Logo />
      </LinkStyle>
      <S.NavLinks>
        <Button
          styleVariant="default"
          size="normal"
          fontSize="small"
          width="6rem"
          onClick={() => {
            navigate("/signin");
          }}>
          로그인
        </Button>
        <Button
          styleVariant="default"
          size="normal"
          fontSize="small"
          width="8rem"
          onClick={() => {
            navigate("/signup");
          }}>
          회원가입
        </Button>
      </S.NavLinks>
    </S.HeaderBox>
  );
};

export default GuestNav;
