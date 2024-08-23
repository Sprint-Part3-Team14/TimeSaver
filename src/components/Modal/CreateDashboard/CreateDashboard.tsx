import { MouseEvent, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Button from "src/components/Button/Button";
import { postDashboards } from "src/utils/api";
import useInputValue from "src/hooks/useInputValue";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";

import ModalBase from "../ModalBase/ModalBase";

import ColorButton from "./ColorButton/ColorButton";
import { COLOR_LIST } from "./ColorConstant";
import * as S from "./CreateDashboardStyled";
import type { CreateDashboard as CreateDashboardType } from "src/utils/apiType";

const CreateDashboard = ({ handleClose }: { handleClose: () => void }) => {
  const { value, handleChangeValue } = useInputValue();
  const [selectColor, setSelectColor] = useState<string>();

  function handleSetSelectColor(event: MouseEvent<HTMLButtonElement>) {
    setSelectColor(event.currentTarget.value);
  }

  useEffect(() => {
    setSelectColor(COLOR_LIST[0]);
  }, []);

  const queryClient = useQueryClient();
  const dashboardQuery = dashboardQueryKeys.list({ navigationMethod: "pagination" });

  const CreateDashboardMutation = useMutation({
    mutationFn: async (dashboardData: CreateDashboardType) => await postDashboards(dashboardData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: dashboardQuery.queryKey });
      handleClose();
    },
  });

  function handleCreateDashboard() {
    if (selectColor) {
      CreateDashboardMutation.mutate({ title: value, color: selectColor });
    }
  }

  return (
    <ModalBase title={"새로운 대시보드"} handleClose={handleClose}>
      <S.CreateDashboardFormStyled onSubmit={handleCreateDashboard}>
        <S.CreateDashboardNameLabel htmlFor="dashboardName">
          대시보드 이름
          <S.CreateDashboardNameInput
            id="dashboardName"
            placeholder="대시보드명을 입력해주세요"
            value={value}
            onChange={handleChangeValue}
          />
        </S.CreateDashboardNameLabel>
        <S.ColorButtonContainer>
          {COLOR_LIST.map(color => (
            <ColorButton
              key={color}
              color={color}
              isSelect={selectColor === color}
              handleSelectColor={handleSetSelectColor}
            />
          ))}
        </S.ColorButtonContainer>
        <S.ButtonContainerStyled>
          <Button styleVariant="white" onClick={handleClose}>
            취소
          </Button>
          <Button type="button" onClick={handleCreateDashboard}>
            생성
          </Button>
        </S.ButtonContainerStyled>
      </S.CreateDashboardFormStyled>
    </ModalBase>
  );
};

export default CreateDashboard;
