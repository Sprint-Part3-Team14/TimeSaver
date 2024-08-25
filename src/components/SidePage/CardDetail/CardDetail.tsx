import { useQuery } from "@tanstack/react-query";
import KebabIcon from "src/components/Icons/KebabIcon";
import { SidePageLayout, SidePageBody, SidePageHeader } from "src/components/SidePage/SidePage";
import { getCardInformation, getComments } from "src/utils/api";
import useToggle from "src/hooks/useToggle";
import EditingDashboard from "src/components/SidePage/CardDetail/EditCard/EditingDashboard";
import CommentSection from "src/components/SidePage/CardDetail/CommentSection/CommentSection";
import { CurrentIdListType } from "../../../pages/Dashboard/components/Card/Card";
import CreateCard from "../../../pages/Dashboard/components/CreateCard/CreateCard";
import TodoDetailContent from "./CardDetailContent/CardDetailContent";
import * as S from "./CardDetailStyled";
import type { DetailCard, GetComments } from "src/utils/apiType";

interface CardDetailProps {
  handleClose: () => void;
  currentIdList: CurrentIdListType;
}

const CardDetail = ({ handleClose, currentIdList }: CardDetailProps) => {
  const { isTrue: isEditing, handleTrue: handleStartEdit, handleFalse: handleCloseEdit } = useToggle();
  const { isTrue: isOpenMenu, handleToggle: handleToggleMenu, handleFalse: handleCloseMenu } = useToggle();
  const { data: cardDetail } = useQuery<DetailCard>({
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
    <SidePageLayout handleClose={handleClose}>
      <SidePageHeader handleClosing={handleClose}>
        <S.Button type="button" onClick={handleToggleMenu}>
          {isOpenMenu && (
            <EditingDashboard
              handleClose={handleCloseMenu}
              columnId={currentIdList.columnId}
              cardId={currentIdList.cardId}
              handleDetailClose={handleClose}
              handleStartEdit={handleStartEdit}
            />
          )}
          <KebabIcon width={13} height={20} />
        </S.Button>
      </SidePageHeader>
      <SidePageBody addStyle={S.cardDetailLayout}>
        {isEditing ? (
          <CreateCard initialData={cardDetail} currentIdList={currentIdList} handleClosePage={handleCloseEdit} />
        ) : (
          <TodoDetailContent todoDetailData={cardDetail} addStyle={S.cardContentStyle} />
        )}

        <CommentSection commentList={cardComment.comments.reverse()} currentIdList={currentIdList} />
      </SidePageBody>
    </SidePageLayout>
  );
};

export default CardDetail;
