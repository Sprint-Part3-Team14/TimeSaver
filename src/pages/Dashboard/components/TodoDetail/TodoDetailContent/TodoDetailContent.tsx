import { DetailCard } from "src/utils/apiType";
import {
  Assignee,
  Container,
  ContentText,
  CreatedDate,
  Header,
  ThumbnailImage,
  Title,
} from "./TodoDetailContentStyled";

const TodoDetailContent = ({ todoDetailData }: { todoDetailData: DetailCard }) => {
  return (
    <Container>
      <Header>
        <Title>{todoDetailData.title}</Title>
        <>뱃지</>
        <Assignee>작성자</Assignee>
      </Header>
      <CreatedDate>{todoDetailData.createdAt}</CreatedDate>
      <ThumbnailImage src={todoDetailData.imageUrl} alt={`${todoDetailData.title} 썸네일 이미지`} />
      <ContentText>{todoDetailData.description}</ContentText>
    </Container>
  );
};

export default TodoDetailContent;
