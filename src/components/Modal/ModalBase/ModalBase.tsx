import { ReactNode, useRef } from "react";
import Portal from "src/components/_common/Portal";
import CloseIcon from "src/components/Icons/CloseIcon";
import useOutsideClick from "src/hooks/useOutsideClick";
import theme from "src/styles/theme";
import * as S from "./ModalBaseStyled";

const ModalBase = ({
  handleClose,
  title,
  children,
}: {
  handleClose: () => void;
  title: string;
  children: ReactNode;
}) => {
  const ModalRef = useRef<HTMLDivElement>(null);

  useOutsideClick(ModalRef, handleClose);
  return (
    <Portal>
      <S.ModalContainer ref={ModalRef}>
        <S.ModalHeader>
          {title && <S.ModalTitle>{title}</S.ModalTitle>}
          <S.CloseButton type="button" onClick={handleClose}>
            <CloseIcon width={20} height={20} color={theme.color.black700} />
          </S.CloseButton>
        </S.ModalHeader>
        {children}
      </S.ModalContainer>
      <S.ModalBackground />
    </Portal>
  );
};

export default ModalBase;
