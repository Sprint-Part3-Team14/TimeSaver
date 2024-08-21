import styled from "styled-components";
import theme from "src/styles/theme";

export const Container = styled.div`
  display: grid;
  grid-template-rows: calc(100vh - 25rem) 15rem;
  padding: 0;
`;

// 댓글 리스트
export const CommentList = styled.div`
  padding: 2.3rem;
  overflow-y: scroll;
  overflow-x: hidden;
  border-bottom: 0.1rem solid ${theme.color.gray700};

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${theme.color.gray700};
    border-radius: 1.2rem;
  }
`;

export const Comment = styled.div`
  display: flex;
  gap: 1.2rem;

  &:not(:last-child) {
    margin-bottom: 1.2rem;
  }
`;

export const AuthorImage = styled.img`
  border-radius: 50%;
  width: 3.2rem;
  height: 3.2rem;
`;

export const CommentContent = styled.div`
  flex-grow: 1;
`;

export const BaseText = styled.div`
  color: ${theme.color.black700};
  font-size: 1.4rem;
`;

export const AuthorNickName = styled(BaseText)`
  line-height: 3.2rem;
  font-weight: 700;
`;

export const GrayText = styled.div`
  color: ${theme.color.gray800};
  font-size: 1.2rem;
  margin-top: 0.9rem;
`;

// 댓글 생성
export const AddComment = styled.div`
  margin-top: auto;
  padding: 2.3rem;
`;

export const Title = styled.label`
  color: ${theme.color.black700};
  font-size: 1.6rem;
  font-weight: 600;
`;

export const CommentBox = styled.form`
  position: relative;
`;

export const CommentInputBox = styled.textarea`
  outline-color: ${theme.color.pink400};
  padding: 1rem;
  margin-top: 1rem;
  box-sizing: border-box;
  resize: none;
  border: 0.1rem solid ${theme.color.gray700};
  border-radius: 0.6rem;
  width: 100%;
  height: 11rem;
  font-size: 1.4rem;

  &::placeholder {
    color: ${theme.color.gray800};
  }
`;

export const Button = styled.button`
  background-color: ${theme.color.pink900};
  color: ${theme.color.white};
  padding: 0.9rem 1rem;
  border-radius: 0.4rem;

  position: absolute;
  bottom: 1rem;
  right: 1rem;
`;

export const CommentFooter = styled.div`
  display: flex;
`;

export const CommentEdit = styled(GrayText)`
  text-decoration: underline;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 1.1rem;
    margin-left: auto;
  }
`;
