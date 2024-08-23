import { FormEvent } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Button from "src/components/Button/Button";
import { postColumns } from "src/utils/api";
import { CreateColumns } from "src/utils/apiType";
import useInputValue from "src/hooks/useInputValue";
import ModalBase from "../ModalBase/ModalBase";
import * as S from "./CreateColumnStyled";

const CreateColumn = ({ handleClose, dashboardId }: { handleClose: () => void; dashboardId: number }) => {
  const { value, handleChangeValue } = useInputValue();
  const queryClient = useQueryClient();

  const CreateColumnMutation = useMutation({
    mutationFn: async (titleBody: CreateColumns) => await postColumns(titleBody),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`dashboard-${dashboardId}`, "columnList"] });
    },
  });

  function handleCreateColumn(event: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    event.preventDefault();

    CreateColumnMutation.mutate({ title: value, dashboardId: dashboardId });
  }
  return (
    <ModalBase title={"컬럼 생성"} handleClose={handleClose}>
      <S.CreateColumnFormStyled onSubmit={handleCreateColumn}>
        <S.CreateColumnNameInput placeholder="컬럼명을 입력해주세요" value={value} onChange={handleChangeValue} />
        <S.ButtonContainerStyled>
          <Button styleVariant="white">취소</Button>
          <Button type="button" onClick={handleCreateColumn}>
            생성
          </Button>
        </S.ButtonContainerStyled>
      </S.CreateColumnFormStyled>
    </ModalBase>
  );
};

export default CreateColumn;
