import { MouseEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "src/components/Button/Button";
import { deleteColumns } from "src/utils/api";
import ModalBase from "../ModalBase/ModalBase";
import * as S from "./DeleteStyled";

const DeleteColumn = ({
  handleClose,
  columnId,
  dashboardId,
}: {
  handleClose: () => void;
  columnId: number;
  dashboardId: number;
}) => {
  const queryClient = useQueryClient();
  const DeleteColumnMutation = useMutation({
    mutationFn: async (columnId: number) => await deleteColumns(columnId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`dashboard-${dashboardId}`, "columnList"] });
    },
  });

  function handleDeleteColumn(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    DeleteColumnMutation.mutate(columnId);
  }

  return (
    <ModalBase title={"컬럼 삭제"} handleClose={handleClose}>
      <S.WarningText>정말 삭제하시겠습니까?</S.WarningText>
      <S.ButtonContainer>
        <Button styleVariant="white" onClick={handleClose}>
          취소
        </Button>
        <Button type="button" onClick={handleDeleteColumn}>
          삭제
        </Button>
      </S.ButtonContainer>
    </ModalBase>
  );
};

export default DeleteColumn;
