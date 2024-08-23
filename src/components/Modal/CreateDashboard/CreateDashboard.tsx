import { MouseEvent, useEffect, useState } from "react";

import Button from "src/components/Button/Button";

import ModalBase from "../ModalBase/ModalBase";

import * as S from "./CreateDashboardStyled";
import ColorButton from "./ColorButton/ColorButton";
import { COLOR_LIST } from "./ColorConstant";

const CreateDashboard = ({ handleClose }: { handleClose: () => void }) => {
  const [selectColor, setSelectColor] = useState<string>();

  function handleSetSelectColor(event: MouseEvent<HTMLButtonElement>) {
    setSelectColor(event.currentTarget.value);
  }

  useEffect(() => {
    setSelectColor(COLOR_LIST[0]);
  }, []);

  return (
    <ModalBase title={"새로운 대시보드"} handleClose={handleClose}>
      <S.CreateDashboardFormStyled>
        <S.CreateDashboardNameLabel htmlFor="dashboardName">
          대시보드 이름
          <S.CreateDashboardNameInput id="dashboardName" placeholder="대시보드명을 입력해주세요" />
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
          <Button styleVariant="white">취소</Button>
          <Button type="button">생성</Button>
        </S.ButtonContainerStyled>
      </S.CreateDashboardFormStyled>
    </ModalBase>
  );
};

export default CreateDashboard;
