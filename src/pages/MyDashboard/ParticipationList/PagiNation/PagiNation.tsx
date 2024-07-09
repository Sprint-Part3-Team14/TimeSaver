import ArrowBackwardIcon from "../../../../components/Icons/ArrowBackwardIcon";
import ArrowForwardIcon from "../../../../components/Icons/ArrowForwardIcon";

import * as S from "./PagiNationStyled";

const PageNation = () => {
  return (
    <S.Container>
      <S.Page> 1 페이지 중 1 </S.Page>
      <S.ButtonBox>
        <S.LeftButton>
          <ArrowForwardIcon width={16} height={16} color={"#D9D9D9"} />
        </S.LeftButton>
        <S.RightButton>
          <ArrowBackwardIcon width={16} height={16} color={"#D9D9D9"} />
        </S.RightButton>
      </S.ButtonBox>
    </S.Container>
  );
};

export default PageNation;
