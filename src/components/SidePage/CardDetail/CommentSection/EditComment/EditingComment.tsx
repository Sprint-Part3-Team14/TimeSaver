import { MouseEvent, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Comment } from "src/utils/apiType";
import useInputValue from "src/hooks/useInputValue";
import { commentQueryKeys } from "src/queryFactory/commentsQueryKeys";
import { putComments } from "src/utils/api";
import * as S from "../CommentsSectionStyled";
import * as T from "./EditingCommentStyled";

const EditingComment = ({
  comment,
  handleSave,
  cardId,
}: {
  comment: Comment;
  handleSave: () => void;
  cardId: number;
}) => {
  const { value, handleSetValue, handleChangeValue } = useInputValue();
  const queryClient = useQueryClient();

  const editCommentMutation = useMutation({
    mutationFn: async () => await putComments(comment.id, { content: value }),
    onSuccess: () => {
      queryClient.invalidateQueries(commentQueryKeys.list(cardId, { size: 10 }));
      handleSave();
    },
  });

  const handleEditingComment = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    editCommentMutation.mutate();
  };

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
          <S.Button type="button" onClick={handleEditingComment}>
            저장
          </S.Button>
        </S.CommentBox>
      </S.CommentContent>
    </S.Comment>
  );
};

export default EditingComment;
