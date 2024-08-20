import { useRef } from "react";
import useOutsideClick from "src/hooks/useOutsideClick";
import * as S from "./EditingDashboardStyled";

const EditingDashboard = ({ handleClose }: { handleClose: () => void }) => {
  const EditingRef = useRef<HTMLDivElement>(null);

  useOutsideClick(EditingRef, handleClose);

  return (
    <S.EditingContainer ref={EditingRef}>
      <S.EditingButton type="button" onClick={handleClose}>
        수정하기
      </S.EditingButton>
      <S.EditingButton type="button" onClick={handleClose}>
        삭제하기
      </S.EditingButton>
    </S.EditingContainer>
  );
};

export default EditingDashboard;
