"use client";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from "react";
import Button from "../../Button/Button";
import * as S from "./ModalLayoutStyled";

interface ReservationPopupType {
  title: string;
  setState: Dispatch<SetStateAction<boolean>>;
  buttonName?: string;
  onButtonClick?: () => void;
  usePortal?: boolean;
  children: React.ReactNode;
}

const ModalLayOut = ({
  title,
  setState,
  buttonName,
  onButtonClick,
  usePortal = false,
  children,
}: ReservationPopupType) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = useCallback(
    (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        if (
          overlayRef.current &&
          overlayRef.current.contains(e.target as Node)
        ) {
          setState(false);
        }
      }
    },
    [setState],
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <>
      {usePortal && <S.Overlay ref={overlayRef} />}
      <S.ModalContainer ref={modalRef} usePortal={usePortal}>
        <S.ContentContainer>
          <S.Header>
            {title}
            <S.CloseButton type="button" onClick={() => setState(false)} />
          </S.Header>
          {children}
        </S.ContentContainer>
        {buttonName && (
          <Button onClick={onButtonClick}>{buttonName}</Button>
        )}
      </S.ModalContainer>
    </>
  );
};

export default ModalLayOut;
