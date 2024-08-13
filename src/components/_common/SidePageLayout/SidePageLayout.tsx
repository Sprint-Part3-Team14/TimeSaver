import React, { ReactNode, RefObject } from "react";
import Portal from "../Portal.tsx";
import * as S from "./SidePageLayout.ts";

interface SidePageLayoutProp {
  children: ReactNode;
  isClose: boolean;
  ref: RefObject<HTMLDivElement>;
  customStyle?: string;
}

const SidePageLayout = ({ children, isClose, ref, customStyle }: SidePageLayoutProp) => {
  return (
    <Portal>
      <S.Container isClose={isClose} ref={ref} customStyle={customStyle}>
        {children}
      </S.Container>
    </Portal>
  );
};

export default SidePageLayout;
