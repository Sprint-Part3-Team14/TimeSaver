import { useQuery } from "@tanstack/react-query";
import KebabIcon from "src/components/Icons/KebabIcon";
import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import Portal from "src/components/common/Portal";
import { getCardInformation, getComments } from "src/utils/api";
import { GetComments } from "src/utils/apiType";
import TodoDetailContent from "./TodoDetailContent/TodoDetailContent";
import * as S from "./TodoDetailStyled";
import CommentSection from "./CommentSection/CommentSection";

const TodoDetail = ({ handleClose, cardId }: { handleClose: () => void; cardId: number }) => {
  const { data: cardDetail } = useQuery({
    queryKey: ["cardDetail", cardId],
    queryFn: async () => {
      return getCardInformation(cardId);
    },
  });

  const { data: cardComment } = useQuery<GetComments>({
    queryKey: ["comments", cardId],
    queryFn: async () => {
      return getComments({ size: 10, cursorId: 1, cardId: cardId });
    },
  });

  if (!cardDetail) {
    return <div>데이터가 없어용</div>;
  }

  if (!cardComment) {
    return <div>댓글이 없어용</div>;
  }

  return (
    <Portal>
      <S.DetailContainer>
        <S.DetailHeader>
          <S.Button type="button" onClick={handleClose}>
            <ArrowBackwardIcon width={22} height={22} />
          </S.Button>
          <S.Button>
            <KebabIcon width={13} height={20} />
          </S.Button>
        </S.DetailHeader>
        <TodoDetailContent todoDetailData={cardDetail} />
        <CommentSection commentList={cardComment.comments} />
      </S.DetailContainer>
    </Portal>
  );
};

export default TodoDetail;
