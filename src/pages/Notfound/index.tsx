import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import MainLogoIcon from "src/components/Icons/MainLogoIcon";
import Button from "src/components/Button/Button";
import * as S from "./NotfoundStyled";

const Notfound = () => {
  const navigation = useNavigate();
  return (
    <>
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <S.Background>
        <S.Layout>
          <MainLogoIcon width={590} height={458} />
          <S.Text>
            <p>oops !</p>
            <p>PAGE NOT FOUND</p>
          </S.Text>
          <Button
            onClick={() => {
              navigation("/");
            }}
            styleVariant="white"
            exceptionStyle={S.AddButtonStyle}>
            메인으로 가기
          </Button>
        </S.Layout>
      </S.Background>
    </>
  );
};
export default Notfound;
