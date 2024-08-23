import Button from "src/components/Button/Button";
import ModalBase from "../ModalBase/ModalBase";
import * as S from "./DeleteStyled";

const DeleteColumn = ({ handleClose }: { handleClose: () => void }) => {
  return (
    <ModalBase title={"컬럼 삭제"} handleClose={handleClose}>
      <S.WarningText>정말 삭제하시겠습니까?</S.WarningText>
      <S.ButtonContainer>
        <Button styleVariant="white" onClick={handleClose}>
          취소
        </Button>
        <Button type="button">삭제</Button>
      </S.ButtonContainer>
    </ModalBase>
  );
};

export default DeleteColumn;
