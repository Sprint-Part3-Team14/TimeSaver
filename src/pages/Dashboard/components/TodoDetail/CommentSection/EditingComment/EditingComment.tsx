import { useEffect } from "react";
import { Comment } from "src/utils/apiType";
import useInputValue from "src/hooks/useInputValue";
import * as S from "../CommentsSectionStyled";
import * as T from "./EditingCommentStyled";

const EditingComment = ({ comment, handleSave }: { comment: Comment; handleSave: () => void }) => {
  const { value, handleSetValue, handleChangeValue } = useInputValue();

  useEffect(() => {
    handleSetValue(comment.content);
  }, []);

  return (
    <S.Comment key={comment.id}>
      <S.AuthorImage src={comment.author.profileImageUrl} alt={`${comment.author.nickname}의 프로필 이미지`} />
      <S.CommentContent>
        <S.AuthorNickName>{comment.author.nickname}</S.AuthorNickName>
        <S.CommentBox>
          <T.EditingCommentInput as="input" value={value} onChange={handleChangeValue} />
          <S.Button type="button" onClick={handleSave}>
            저장
          </S.Button>
        </S.CommentBox>
      </S.CommentContent>
    </S.Comment>
  );
};

export default EditingComment;
