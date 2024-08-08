import { DetailCard } from "src/utils/apiType";
import * as S from "./TodoDetailContentStyled";

const TodoDetailContent = ({ todoDetailData }: { todoDetailData: DetailCard }) => {
  return (
    <S.Container>
      <S.Header>
        <S.Title>{todoDetailData.title}</S.Title>
        <>뱃지</>
        <S.Assignee>작성자</S.Assignee>
      </S.Header>
      <S.CreatedDate>{todoDetailData.createdAt}</S.CreatedDate>
      <S.ThumbnailImage src={todoDetailData.imageUrl} alt={`${todoDetailData.title} 썸네일 이미지`} />
      <S.ContentText>{todoDetailData.description}</S.ContentText>
    </S.Container>
  );
};

export default TodoDetailContent;
