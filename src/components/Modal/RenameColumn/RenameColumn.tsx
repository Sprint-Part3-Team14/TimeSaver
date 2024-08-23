import Button from "src/components/Button/Button";
import ModalBase from "../ModalBase/ModalBase";
import * as S from "./RenameColumnStyled";

const RenameColumnModal = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <ModalBase title={"컬럼명 변경"} handleClose={handleClose}>
      <S.RenameForm>
        <S.RenameInput />
        <S.ButtonContainerStyled>
          <Button styleVariant="white" onClick={handleClose}>
            취소
          </Button>
          <Button>변경</Button>
        </S.ButtonContainerStyled>
      </S.RenameForm>
    </ModalBase>
  );
};

export default RenameColumnModal;
