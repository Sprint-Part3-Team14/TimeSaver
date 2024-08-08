import { useQuery } from "@tanstack/react-query";
import KebabIcon from "src/components/Icons/KebabIcon";
import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import Portal from "src/components/common/Portal";
import { getCardInformation } from "src/utils/api";
import TodoDetailContent from "./TodoDetailContent/TodoDetailContent";
import * as S from "./TodoDetailStyled";

const TodoDetail = ({ handleClose, cardId }: { handleClose: () => void; cardId: number }) => {
  const { data: cardDetail } = useQuery({
    queryKey: ["cardDetail", cardId],
    queryFn: async () => {
      return getCardInformation(cardId);
    },
  });

  if (!cardDetail) {
    return <div>데이터가 없어용</div>;
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
        <S.DetailComments>댓글 목록</S.DetailComments>
      </S.DetailContainer>
    </Portal>
  );
};

export default TodoDetail;
