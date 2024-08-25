import { FormEvent, MouseEvent, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { COLOR_LIST } from "src/components/Modal/CreateDashboard/ColorConstant";
import ColorButton from "src/components/Modal/CreateDashboard/ColorButton/ColorButton";
import useInputValue from "src/hooks/useInputValue";
import Button from "src/components/Button/Button";
import { putDashboardDetails } from "src/utils/api";
import { dashboardQueryKeys } from "src/queryFactory/dashboardQueryKeys";
import * as S from "./RenameDashboardStyled";
import type { FixDashboard } from "src/utils/apiType";

const RenameDashboard = ({ dashboardId }: { dashboardId: number }) => {
  const [selectColor, setSelectColor] = useState<string>();
  const { value: newTitle, handleChangeValue } = useInputValue();

  function handleSetSelectColor(event: MouseEvent<HTMLButtonElement>) {
    setSelectColor(event.currentTarget.value);
  }

  useEffect(() => {
    setSelectColor(COLOR_LIST[0]);
  }, []);

  const queryClient = useQueryClient();
  const dashboardQuery = dashboardQueryKeys.detail(dashboardId);

  const EditDashboardMutation = useMutation({
    mutationFn: async ({ dashboardId, body }: { dashboardId: number; body: FixDashboard }) =>
      await putDashboardDetails(dashboardId, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: dashboardQuery.queryKey });
    },
  });

  function handleEditDashboardDetail(event: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    event.preventDefault();

    if (selectColor) {
      EditDashboardMutation.mutate({ dashboardId: dashboardId, body: { color: selectColor, title: newTitle } });
    }
  }

  return (
    <S.ContainerStyled as="form" onSubmit={handleEditDashboardDetail}>
      <S.HeaderLayout>
        <S.Title htmlFor="edit-dashboardName">대시보드명 변경</S.Title>
        <S.ColorButtonSection>
          {COLOR_LIST.map(color => (
            <ColorButton
              key={color}
              color={color}
              isSelect={color === selectColor}
              handleSelectColor={handleSetSelectColor}
            />
          ))}
        </S.ColorButtonSection>
      </S.HeaderLayout>
      <S.RenameInput
        id="edit-dashboardName"
        value={newTitle}
        onChange={handleChangeValue}
        placeholder="새로운 대시보드 이름을 입력해주세요"
      />
      <Button width="10.9rem" exceptionStyle={S.ButtonLayout} onClick={handleEditDashboardDetail}>
        변경
      </Button>
    </S.ContainerStyled>
  );
};

export default RenameDashboard;
