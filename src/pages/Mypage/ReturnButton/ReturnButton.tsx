import ArrowForwardIcon from "../../../components/Icons/ArrowForwardIcon";
import * as S from "./ReutrnButtonStyled";

const ReturnButton = () => {
  return (
    <S.Container>
      <ArrowForwardIcon width={20} height={20} />
      <S.Text>돌아가기</S.Text>
    </S.Container>
  );
};

export default ReturnButton;
