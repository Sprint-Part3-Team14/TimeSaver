import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import KebabIcon from "src/components/Icons/KebabIcon";
import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import Portal from "src/components/_common/Portal";
import { getCardInformation, getComments } from "src/utils/api";
import { GetComments } from "src/utils/apiType";
import useToggle from "src/hooks/useToggle";
import useOutsideClick from "src/hooks/useOutsideClick";
import { CurrentIdListType } from "../Card/Card";
import TodoDetailContent from "./TodoDetailContent/TodoDetailContent";
import CommentSection from "./CommentSection/CommentSection";
import * as S from "./TodoDetailStyled";

interface TodoDetailProps {
  handleClose: () => void;
  currentIdList: CurrentIdListType;
}

const TodoDetail = ({ handleClose, currentIdList }: TodoDetailProps) => {
  const { isTrue: isClose, handleTrue: handleAnimationClosing } = useToggle();
  const CardDetailRef = useRef<HTMLDivElement>(null);

  useOutsideClick(CardDetailRef, handleClosing);

  function handleClosing() {
    handleAnimationClosing();
    setTimeout(() => {
      handleClose();
    }, 500);
  }

  const { data: cardDetail } = useQuery({
    queryKey: ["cardDetail", currentIdList.cardId],
    queryFn: async () => {
      return getCardInformation(currentIdList.cardId);
    },
  });

  const { data: cardComment } = useQuery<GetComments>({
    queryKey: ["comments", currentIdList.cardId],
    queryFn: async () => {
      return getComments({ size: 10, cardId: currentIdList.cardId });
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
      <S.DetailContainer isClose={isClose} ref={CardDetailRef}>
        <S.DetailHeader>
          <S.Button type="button" onClick={handleClosing}>
            <ArrowBackwardIcon width={22} height={22} />
          </S.Button>
          <S.Button>
            <KebabIcon width={13} height={20} />
          </S.Button>
        </S.DetailHeader>
        <TodoDetailContent todoDetailData={cardDetail} />
        <CommentSection commentList={cardComment.comments.reverse()} currentIdList={currentIdList} />
      </S.DetailContainer>
    </Portal>
  );
};

export default TodoDetail;
