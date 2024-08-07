import KebabIcon from "src/components/Icons/KebabIcon";
import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import { DetailContainer, DetailHeader, DetailMain } from "./TodoDetailStyled";

const TodoDetail = () => {
  return (
    <DetailContainer>
      <DetailHeader>
        <ArrowBackwardIcon width={16} height={16} />
        <KebabIcon width={13} height={16} />
      </DetailHeader>
      <DetailMain>
        <>할 일 상세보기</>
      </DetailMain>
    </DetailContainer>
  );
};

export default TodoDetail;
