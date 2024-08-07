import KebabIcon from "src/components/Icons/KebabIcon";
import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import { DetailComments, DetailContainer, DetailContent, DetailHeader } from "./TodoDetailStyled";

const TodoDetail = () => {
  return (
    <DetailContainer>
      <DetailHeader>
        <ArrowBackwardIcon width={16} height={16} />
        <KebabIcon width={13} height={16} />
      </DetailHeader>
      <DetailContent>할 일 상세보기</DetailContent>
      <DetailComments>댓글 목록</DetailComments>
    </DetailContainer>
  );
};

export default TodoDetail;
