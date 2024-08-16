import { ReactNode, RefObject } from "react";
import Portal from "src/components/_common/Portal";
import useOutsideClick from "src/hooks/useOutsideClick";
import * as S from "./SidePageStyled";

export interface SidePageBaseProp {
  isClose: boolean;
  ref: RefObject<HTMLDivElement>;
  handleClose: () => void;
  children: ReactNode;
}

const SidePage = ({ isClose, ref, handleClose, children }: SidePageBaseProp) => {
  useOutsideClick(ref, handleClose);

  return (
    <Portal>
      <S.SidePageContainer isClose={isClose} ref={ref}>
        {children}
      </S.SidePageContainer>
    </Portal>
  );
};

export default SidePage;
