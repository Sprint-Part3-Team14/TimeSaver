import { ReactNode, useRef } from "react";
import Portal from "src/components/_common/Portal";
import useToggle from "src/hooks/useToggle";
import { Button } from "src/pages/Dashboard/components/SidePage/CardDetail/CardDetailStyled";
import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import useOutsideClick from "src/hooks/useOutsideClick";
import * as S from "./SidePageStyled";

export const SidePage = ({
  handleClose,
  children,
  addStyle,
}: {
  handleClose: () => void;
  children: ReactNode;
  addStyle?: string;
}) => {
  const { isTrue: isAnimationClose, handleTrue: handleAnimationClose } = useToggle();
  const sidePageRef = useRef<HTMLDivElement>(null);

  useOutsideClick(sidePageRef, handleClosing);

  function handleClosing() {
    handleAnimationClose();
    setTimeout(() => {
      handleClose();
    }, 500);
  }

  return (
    <Portal>
      <S.SidePageContainer isClose={isAnimationClose} ref={sidePageRef} addStyle={addStyle}>
        {children}
      </S.SidePageContainer>
    </Portal>
  );
};

export const SidePageHeader = ({ handleClosing, children }: { handleClosing: () => void; children?: ReactNode }) => {
  return (
    <S.SidePageHeader>
      <Button type="button" onClick={handleClosing}>
        <ArrowBackwardIcon width={22} height={22} />
      </Button>
      {children}
    </S.SidePageHeader>
  );
};

export const SidePageBody = ({ children, addStyle }: { children: ReactNode; addStyle?: string }) => {
  return <S.SidePageBody addStyle={addStyle}>{children}</S.SidePageBody>;
};
