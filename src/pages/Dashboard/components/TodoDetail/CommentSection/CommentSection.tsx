import * as S from "./CommentsSectionStyled";
import { mockData } from "./mockData";

const CommentSection = () => {
  return (
    <S.Container>
      <S.CommentList>
        {mockData.comments.map(element => (
          <S.Comment>
            <S.AuthorImage src={element.author.profileImageUrl} alt={`${element.author.nickname}의 프로필 이미지`} />
            <S.CommentContent>
              <S.AuthorNickName>{element.author.nickname}</S.AuthorNickName>
              <S.BaseText>{element.content}</S.BaseText>
              <S.CommentFooter>
                <S.GrayText>{"2024-07-12 12:00"}</S.GrayText>

                <S.CommentEdit as="button" type="button">
                  수정
                </S.CommentEdit>
                <S.CommentEdit as="button" type="button">
                  삭제
                </S.CommentEdit>
              </S.CommentFooter>
            </S.CommentContent>
          </S.Comment>
        ))}
      </S.CommentList>
      <S.AddComment>
        <S.Title>댓글</S.Title>
        <S.CommentBox>
          <S.CommentInputBox placeholder="댓글 작성하기" />
          <S.Button>대체</S.Button>
        </S.CommentBox>
      </S.AddComment>
    </S.Container>
  );
};

export default CommentSection;
