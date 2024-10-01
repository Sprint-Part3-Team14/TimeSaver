import { FormEvent, useEffect } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "src/components/Button/Button";
import useInputValue from "src/hooks/useInputValue";
import { putColumns } from "src/utils/api";
import { FixColumns } from "src/utils/apiType";
import { columnQueryKeys } from "src/queryFactory/columnQueryKeys";
import ModalBase from "../ModalBase/ModalBase";
import * as S from "./RenameColumnStyled";

const RenameColumnModal = ({
  handleClose,
  dashboardId,
  columnId,
  columnTitle,
}: {
  handleClose: () => void;
  dashboardId: number;
  columnId: number;
  columnTitle: string;
}) => {
  const { value, handleChangeValue, handleSetValue } = useInputValue();
  const queryClient = useQueryClient();
  const RenameColumnMutation = useMutation({
    mutationFn: async ({ columnId, titleBody }: { columnId: number; titleBody: FixColumns }) =>
      putColumns(columnId, titleBody),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: columnQueryKeys.list(dashboardId, { dashboardId: dashboardId }).queryKey,
      });
      handleClose();
    },
  });

  function handleRenameColumn(event: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    event.preventDefault();
    RenameColumnMutation.mutate({ columnId: columnId, titleBody: { title: value } });
  }

  useEffect(() => {
    if (columnTitle) {
      handleSetValue(columnTitle);
    }
  }, []);

  return (
    <ModalBase title={"컬럼명 변경"} handleClose={handleClose}>
      <S.RenameForm onSubmit={handleRenameColumn}>
        <S.RenameInput value={value} onChange={handleChangeValue} />
        <S.ButtonContainerStyled>
          <Button
            styleVariant="white"
            onClick={handleClose}
            exceptionStyle={"padding : 1.5rem 2rem; border-radius : 0.6rem;"}>
            취소
          </Button>
          <Button
            type="button"
            onClick={handleRenameColumn}
            exceptionStyle={"padding : 1.5rem 2rem;  border-radius : 0.6rem;"}>
            변경
          </Button>
        </S.ButtonContainerStyled>
      </S.RenameForm>
    </ModalBase>
  );
};

export default RenameColumnModal;
