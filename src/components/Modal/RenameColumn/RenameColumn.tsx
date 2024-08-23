import { FormEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "src/components/Button/Button";
import useInputValue from "src/hooks/useInputValue";
import { putColumns } from "src/utils/api";
import { FixColumns } from "src/utils/apiType";
import ModalBase from "../ModalBase/ModalBase";
import * as S from "./RenameColumnStyled";

const RenameColumnModal = ({
  handleClose,
  dashboardId,
  columnId,
}: {
  handleClose: () => void;
  dashboardId: number;
  columnId: number;
}) => {
  const { value, handleChangeValue } = useInputValue();
  const queryClient = useQueryClient();

  const RenameColumnMutation = useMutation({
    mutationFn: async ({ columnId, titleBody }: { columnId: number; titleBody: FixColumns }) =>
      putColumns(columnId, titleBody),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`dashboard-${dashboardId}`, "columnList"] });
      handleClose();
    },
  });

  function handleRenameColumn(event: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    event.preventDefault();
    RenameColumnMutation.mutate({ columnId: columnId, titleBody: { title: value } });
  }

  return (
    <ModalBase title={"컬럼명 변경"} handleClose={handleClose}>
      <S.RenameForm onSubmit={handleRenameColumn}>
        <S.RenameInput value={value} onChange={handleChangeValue} />
        <S.ButtonContainerStyled>
          <Button styleVariant="white" onClick={handleClose}>
            취소
          </Button>
          <Button type="button" onClick={handleRenameColumn}>
            변경
          </Button>
        </S.ButtonContainerStyled>
      </S.RenameForm>
    </ModalBase>
  );
};

export default RenameColumnModal;
