import { DetailCard } from "src/utils/apiType";
import UserProfile from "src/components/UserProfile/UserProfile";
import Tag from "../../../CreateCard/AddTag/Tag/Tag";
import * as T from "../../../CreateCard/AddTag/AddTagStyled";
import * as S from "./CardDetailContentStyled";

const TodoDetailContent = ({ todoDetailData, addStyle }: { todoDetailData: DetailCard; addStyle?: string }) => {
  const { title, assignee, tags, dueDate, imageUrl, description } = todoDetailData;
  return (
    <S.Container addStyle={addStyle}>
      <S.Header>
        <S.Title>{title}</S.Title>
        <S.Assignee>
          <UserProfile
            profileImageUrl={
              assignee.profileImageUrl && assignee.profileImageUrl !== "null" ? assignee.profileImageUrl : null
            }
            nickName={todoDetailData.assignee.nickname}
          />
        </S.Assignee>
      </S.Header>
      <S.CreatedDate>{`마감일 ${dueDate}`}</S.CreatedDate>
      <S.ThumbnailImage src={imageUrl} alt={`${title} 썸네일 이미지`} />
      <S.ContentText>{description}</S.ContentText>
      <S.TagSection>
        <T.Title>태그</T.Title>
        <T.TagContainer>
          {tags.map(tag => (
            <Tag text={tag} />
          ))}
        </T.TagContainer>
      </S.TagSection>
    </S.Container>
  );
};

export default TodoDetailContent;
