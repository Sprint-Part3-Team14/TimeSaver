import { useRef } from "react";
import Portal from "src/components/_common/Portal";
import useOutsideClick from "src/hooks/useOutsideClick";
import useToggle from "src/hooks/useToggle";
import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import * as S from "./CreateCardStyled";

const CreateCard = ({ handleClose }: { handleClose: () => void }) => {
  const { isTrue: isClose, handleTrue: handleAnimationClosing } = useToggle();
  const CreateCardRef = useRef<HTMLDivElement>(null);

  useOutsideClick(CreateCardRef, handleClosing);

  function handleClosing() {
    handleAnimationClosing();
    setTimeout(() => {
      handleClose();
    }, 500);
  }

  return (
    <Portal>
      <S.PageContainer isClose={isClose} ref={CreateCardRef}>
        <S.PageHeader>
          <S.CloseButton type="button" onClick={handleClosing}>
            <ArrowBackwardIcon width={22} height={22} />
          </S.CloseButton>
        </S.PageHeader>
        <S.PageContent>
          <form>
            <S.TitleInput id="cardTitle" type="text" placeholder="제목을 입력해주세요" />
            <S.CardAttributes>
              <S.DueDayContainer>
                <S.DueDateLabel htmlFor="dueDate">마감일</S.DueDateLabel>
                <S.DueDateInput type="datetime-local" id="dueDate" />
              </S.DueDayContainer>
              <div>드롭다운</div>
            </S.CardAttributes>
            <S.ThumbNailContainer>
              <S.ThumbNailImage src={"public/images/landing1.jpg"} alt="썸네일 미리보기" />
              <S.InputImageLabel htmlFor="thumbNailImage">이미지 첨부</S.InputImageLabel>
              <S.InputImage id="thumbNailImage" type="file" />
            </S.ThumbNailContainer>
          </form>
        </S.PageContent>
      </S.PageContainer>
    </Portal>
  );
};

export default CreateCard;
