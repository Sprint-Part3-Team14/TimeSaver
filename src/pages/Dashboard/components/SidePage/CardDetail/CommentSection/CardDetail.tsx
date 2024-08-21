import { useQuery } from "@tanstack/react-query";
import KebabIcon from "src/components/Icons/KebabIcon";
import { SidePage, SidePageBody, SidePageHeader } from "src/components/SidePage/SidePage";
import { getCardInformation, getComments } from "src/utils/api";
import useToggle from "src/hooks/useToggle";
import { CurrentIdListType } from "../../../Card/Card";
import TodoDetailContent from "../CardDetailContent/CardDetailContent";
import EditingDashboard from "../Editing/EditingDashboard";
import CommentSection from "./CommentSection";
import * as S from "./CardDetailStyled";
import type { GetComments } from "src/utils/apiType";

interface CardDetailProps {
  handleClose: () => void;
  currentIdList: CurrentIdListType;
}

const CardDetail = ({ handleClose, currentIdList }: CardDetailProps) => {
  const { isTrue: isEditing, handleToggle: handleToggleEditing, handleFalse: handleCloseEdit } = useToggle();
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
    return <div>댓글 없떠잉</div>;
  }

  return (
    <>
      {isEditing && (
        <EditingDashboard
          handleClose={handleCloseEdit}
          columnId={currentIdList.columnId}
          cardId={currentIdList.cardId}
          handleDetailClose={handleClose}
        />
      )}
      <SidePage handleClose={handleClose}>
        <SidePageHeader handleClosing={handleClose}>
          <S.Button type="button" onClick={handleToggleEditing}>
            <KebabIcon width={13} height={20} />
          </S.Button>
        </SidePageHeader>
        <SidePageBody addStyle={S.cardDetailLayout}>
          <TodoDetailContent todoDetailData={cardDetail} addStyle={S.cardContentStyle} />
          <CommentSection commentList={cardComment.comments.reverse()} currentIdList={currentIdList} />
        </SidePageBody>
      </SidePage>
    </>
  );
};

export default CardDetail;
