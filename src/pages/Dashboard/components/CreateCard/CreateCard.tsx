import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import Portal from "src/components/_common/Portal";
import useOutsideClick from "src/hooks/useOutsideClick";
import useToggle from "src/hooks/useToggle";
import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import Button from "src/components/Button/Button";
import { getMembers } from "src/utils/api";
import * as S from "./CreateCardStyled";

export interface GetMembersResponse {
  members: MembersData[];
  totalCount: number;
}

export interface MembersData {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
  isOwner: boolean;
  userId: number;
}

const CreateCard = ({ handleClose, dashboardId }: { handleClose: () => void; dashboardId: number }) => {
  const { isTrue: isClose, handleTrue: handleAnimationClosing } = useToggle();
  const CreateCardRef = useRef<HTMLDivElement>(null);

  useOutsideClick(CreateCardRef, handleClosing);

  const { data: dashboardMemberList } = useQuery<GetMembersResponse>({
    queryKey: ["dashboard", "memberList", dashboardId],
    queryFn: async () => await getMembers({ page: 1, dashboardId: Number(dashboardId) }),
    enabled: !!dashboardId,
  });

  function handleClosing() {
    handleAnimationClosing();
    setTimeout(() => {
      handleClose();
    }, 500);
  }

  if (!dashboardMemberList) {
    return <div>멤버 조회 중 키킼</div>;
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
          <S.CreateForm>
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
            <S.CardExplanation placeholder="설명을 적어주세요" />
            <S.ButtonContainer>
              <Button
                onClick={handleClosing}
                styleVariant="white"
                exceptionStyle="max-width : 12rem; padding : 1rem 2rem; border-radius : 0.4rem;">
                취소
              </Button>
              <Button>생성</Button>
            </S.ButtonContainer>
          </S.CreateForm>
        </S.PageContent>
      </S.PageContainer>
    </Portal>
  );
};

export default CreateCard;
