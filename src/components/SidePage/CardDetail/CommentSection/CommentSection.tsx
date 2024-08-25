import { FormEvent, MouseEvent, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Comment, CreateComments } from "src/utils/apiType";
import useInputValue from "src/hooks/useInputValue";
import { deleteComments, postComments } from "src/utils/api";
import Button from "src/components/Button/Button";
import { CurrentIdListType } from "src/pages/Dashboard/components/Card/Card";
import EmptyComment from "./EmptyComment";
import * as S from "./CommentsSectionStyled";
import EditingComment from "./EditComment/EditingComment";

interface EditingState {
  isEditing: boolean;
  commentId: number | null;
}

const CommentSection = ({
  commentList,
  currentIdList,
}: {
  commentList: Comment[];
  currentIdList: CurrentIdListType;
}) => {
  const queryClient = useQueryClient();

  const { value, handleChangeValue, handleResetValue } = useInputValue();
  const { cardId, columnId, dashboardId } = currentIdList;
  const [isEditingComment, setIsEditingComment] = useState<EditingState>();

  const postCommentMutation = useMutation({
    mutationFn: (props: CreateComments) => {
      return postComments(props);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", cardId] });
    },
  });

  const deleteCommentMutation = useMutation({
    mutationFn: async (commentId: number) => await deleteComments(commentId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["comments", cardId] });
    },
  });

  function handleSubmitComment(event: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    event.preventDefault();
    postCommentMutation.mutate({ cardId: cardId, columnId: columnId, dashboardId: dashboardId, content: value });
    handleResetValue();
  }

  function handleDeleteComment(event: MouseEvent<HTMLButtonElement>) {
    deleteCommentMutation.mutateAsync(Number(event.currentTarget.value));
  }

  function handleEditingComment(event: MouseEvent<HTMLButtonElement>) {
    setIsEditingComment({
      isEditing: true,
      commentId: Number(event.currentTarget.value),
    });
  }

  function handleEditingEnd() {
    setIsEditingComment({
      isEditing: false,
      commentId: null,
    });
  }

  return (
    <S.Container>
      <S.CommentList>
        {commentList.length !== 0 ? (
          commentList.map(comment => {
            return isEditingComment?.isEditing === true && isEditingComment.commentId === comment.id ? (
              <EditingComment cardId={cardId} comment={comment} handleSave={handleEditingEnd} />
            ) : (
              <S.Comment key={comment.id}>
                <S.AuthorImage
                  src={comment.author.profileImageUrl}
                  alt={`${comment.author.nickname}의 프로필 이미지`}
                />
                <S.CommentContent>
                  <S.AuthorNickName>{comment.author.nickname}</S.AuthorNickName>
                  <S.BaseText>{comment.content}</S.BaseText>
                  <S.CommentFooter>
                    <S.GrayText>{"2024-07-12 12:00"}</S.GrayText>
                    <S.CommentEdit as="button" type="button" value={comment.id} onClick={handleEditingComment}>
                      수정
                    </S.CommentEdit>
                    <S.CommentEdit as="button" type="button" value={String(comment.id)} onClick={handleDeleteComment}>
                      삭제
                    </S.CommentEdit>
                  </S.CommentFooter>
                </S.CommentContent>
              </S.Comment>
            );
          })
        ) : (
          <EmptyComment />
        )}
      </S.CommentList>
      <S.AddComment>
        <S.CommentBox onSubmit={handleSubmitComment}>
          <S.Title htmlFor="comment">댓글</S.Title>
          <S.CommentInputBox id="comment" placeholder="댓글 작성하기" value={value} onChange={handleChangeValue} />
          <Button
            type="submit"
            exceptionStyle={"position: absolute;   bottom: 1rem;   right: 1rem; width : 5.7rem; font-size: 1.2rem;"}
            onSubmit={handleSubmitComment}>
            입력
          </Button>
        </S.CommentBox>
      </S.AddComment>
    </S.Container>
  );
};

export default CommentSection;
