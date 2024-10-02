import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useOutsideClick from "src/hooks/useOutsideClick";
import { deleteCard } from "src/utils/api";
import { cardQueryKeys } from "src/queryFactory/cardQueryKeys";
import * as S from "./EditingDashboardStyled";

const EditingDashboard = ({
  handleClose,
  columnId,
  cardId,
  handleDetailClose,
  handleStartEdit,
}: {
  handleClose: () => void;
  columnId: number;
  cardId: number;
  handleDetailClose: () => void;
  handleStartEdit: () => void;
}) => {
  const queryClient = useQueryClient();
  const EditingRef = useRef<HTMLDivElement>(null);

  const cardDeleteMutation = useMutation({
    mutationFn: async (cardId: number) => await deleteCard(cardId),
    onSuccess: () => {
      handleDetailClose();
      setTimeout(() => {
        queryClient.invalidateQueries({
          queryKey: cardQueryKeys.list(columnId, { size: 10, columnId: columnId }).queryKey,
        });
      }, 500);
    },
  });

  useOutsideClick(EditingRef, handleClose);

  return (
    <S.EditingContainer ref={EditingRef}>
      <S.EditingButton type="button" onClick={handleStartEdit}>
        수정하기
      </S.EditingButton>
      <S.EditingButton
        type="button"
        onClick={() => {
          cardDeleteMutation.mutate(cardId);
        }}>
        삭제하기
      </S.EditingButton>
    </S.EditingContainer>
  );
};

export default EditingDashboard;
