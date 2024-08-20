import { useRef } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useOutsideClick from "src/hooks/useOutsideClick";
import { deleteCard } from "src/utils/api";
import * as S from "./EditingDashboardStyled";

const EditingDashboard = ({
  handleClose,
  columnId,
  cardId,
  handleDetailClose,
}: {
  handleClose: () => void;
  columnId: number;
  cardId: number;
  handleDetailClose: () => void;
}) => {
  const queryClient = useQueryClient();
  const EditingRef = useRef<HTMLDivElement>(null);

  const cardDeleteMutation = useMutation({
    mutationFn: async (cardId: number) => await deleteCard(cardId),
    onSuccess: () => {
      handleDetailClose();
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: [`column-${columnId}`, "cardList"] });
      }, 500);
    },
  });

  function handleDeleteCard() {
    cardDeleteMutation.mutate(cardId);
  }

  useOutsideClick(EditingRef, handleClose);

  return (
    <S.EditingContainer ref={EditingRef}>
      <S.EditingButton type="button" onClick={handleClose}>
        수정하기
      </S.EditingButton>
      <S.EditingButton type="button" onClick={handleDeleteCard}>
        삭제하기
      </S.EditingButton>
    </S.EditingContainer>
  );
};

export default EditingDashboard;
