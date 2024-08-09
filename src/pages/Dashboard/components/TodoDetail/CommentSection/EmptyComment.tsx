import theme from "src/styles/theme";
import styled from "styled-components";

const EMPTY_COMMENT = "등록된 댓글이 없습니다.";

const EmptyComment = () => {
  return <GrayText>{EMPTY_COMMENT}</GrayText>;
};

export default EmptyComment;

const GrayText = styled.p`
  color: ${theme.color.gray900};
  text-align: center;
  font-size: 1.4rem;
`;
