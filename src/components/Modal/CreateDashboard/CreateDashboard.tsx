import { MouseEvent } from "react";

import Button from "src/components/Button/Button";

import ModalBase from "../ModalBase/ModalBase";

import * as S from "./CreateDashboardStyled";
import ColorButton from "./ColorButton/ColorButton";

const CreateDashboard = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <ModalBase title={"새로운 대시보드"} handleClose={handleClose}>
      <S.CreateDashboardFormStyled>
        <S.CreateDashboardNameLabel htmlFor="dashboardName">
          대시보드 이름
          <S.CreateDashboardNameInput id="dashboardName" placeholder="대시보드명을 입력해주세요" />
        </S.CreateDashboardNameLabel>
        <S.CreateDashboardColorLabel>대시보드 색상</S.CreateDashboardColorLabel>
        <ColorButton
          color="#000000"
          isSelect={true}
          handleSelectColor={(event: MouseEvent<HTMLButtonElement>) => {
            console.log(event.currentTarget.value);
          }}
        />
        <S.ButtonContainerStyled>
          <Button styleVariant="white">취소</Button>
          <Button type="button">생성</Button>
        </S.ButtonContainerStyled>
      </S.CreateDashboardFormStyled>
    </ModalBase>
  );
};

export default CreateDashboard;
