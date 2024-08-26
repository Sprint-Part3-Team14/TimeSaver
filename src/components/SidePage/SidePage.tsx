import React, { ReactElement, ReactNode, useRef } from "react";
import Portal from "src/components/_common/Portal";
import useToggle from "src/hooks/useToggle";
import { Button } from "src/components/SidePage/CardDetail/CardDetailStyled";
import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import useOutsideClick from "src/hooks/useOutsideClick";
import animationClosing from "./util/animationClosing";
import * as S from "./SidePageStyled";

export const SidePageLayout = ({
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

  const { handleAnimationEnd, handleClosing } = animationClosing({
    isAnimationClose: isAnimationClose,
    animationClose: handleAnimationClose,
    handleDeletePortal: handleClose,
  });

  useOutsideClick(sidePageRef, handleClosing);

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as ReactElement, { handleClosing });
    }
    return child;
  });

  return (
    <Portal>
      <S.SidePageContainer
        isClose={isAnimationClose}
        ref={sidePageRef}
        addStyle={addStyle}
        onAnimationEnd={handleAnimationEnd}>
        {childrenWithProps}
      </S.SidePageContainer>
    </Portal>
  );
};

export const SidePageHeader = ({
  handleClosing,
  children,
  addStyle,
}: {
  handleClosing: () => void;
  children?: ReactNode;
  addStyle?: string;
}) => {
  return (
    <S.SidePageHeader addStyle={addStyle}>
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
