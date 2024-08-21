import { DetailCard } from "src/utils/apiType";
import * as S from "./CardDetailContentStyled";

const TodoDetailContent = ({ todoDetailData, addStyle }: { todoDetailData: DetailCard; addStyle?: string }) => {
  return (
    <S.Container addStyle={addStyle}>
      <S.Header>
        <S.Title>{todoDetailData.title}</S.Title>
        <>뱃지</>
        <S.Assignee>작성자</S.Assignee>
      </S.Header>
      <S.CreatedDate>{`마감일 ${todoDetailData.dueDate}`}</S.CreatedDate>
      <S.ThumbnailImage src={todoDetailData.imageUrl} alt={`${todoDetailData.title} 썸네일 이미지`} />
      <S.ContentText>{todoDetailData.description}</S.ContentText>
    </S.Container>
  );
};

export default TodoDetailContent;
