import { FormEvent, useRef, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Portal from "src/components/_common/Portal";
import useOutsideClick from "src/hooks/useOutsideClick";
import useToggle from "src/hooks/useToggle";
import ArrowBackwardIcon from "src/components/Icons/ArrowBackwardIcon";
import Button from "src/components/Button/Button";
import { getMembers, postCardImageFetch, postCards } from "src/utils/api";
import useInputValue from "src/hooks/useInputValue";
import useInputImage from "src/hooks/useInputFile";
import TextArea from "src/components/TextArea/TextArea";
import FileInput from "src/components/FileInput/FileInput";
import DateInput from "./DateInput/DateInput";
import DropDown from "./DropDown/DropDown";
import AddTag from "./AddTag/AddTag";
import * as S from "./CreateCardStyled";
import type { CreateCard as CreateCardProps } from "src/utils/apiType";

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

export interface WriterInfo {
  profileImageUrl: string;
  nickName: string;
  userId: number;
}

const CreateCard = ({
  handleClose,
  dashboardId,
  columnId,
}: {
  handleClose: () => void;
  dashboardId: number;
  columnId: number;
}) => {
  const { value: titleInputValue, handleChangeValue } = useInputValue();
  const { value: dueDate, handleChangeValue: handleChangDateValue } = useInputValue();
  const [writerInfo, setWriterInfo] = useState<WriterInfo>();
  const { value: descriptionValue, handleChangeValue: handleChangeCardContent } = useInputValue();
  const [tagList, setTagList] = useState<string[]>([]);
  const { imageUrl, handleImageChange, handleSetFile, imageFile } = useInputImage(({ file }: { file: File }) => {
    CardImageMutation.mutate({ columnId: columnId, image: file });
  });

  const { isTrue: isClose, handleTrue: handleAnimationClosing } = useToggle();
  const { isTrue: isOpenDropDown, handleToggle } = useToggle();
  const CreateCardRef = useRef<HTMLDivElement>(null);

  const queryClient = useQueryClient();

  useOutsideClick(CreateCardRef, handleClosing);

  const { data: dashboardMemberList } = useQuery<GetMembersResponse>({
    queryKey: ["dashboard", "memberList", dashboardId],
    queryFn: async () => await getMembers({ page: 1, dashboardId: Number(dashboardId) }),
    enabled: !!dashboardId,
  });

  const CardImageMutation = useMutation({
    mutationFn: async ({ columnId, image }: { columnId: number; image: File }) => {
      return await postCardImageFetch(columnId, image);
    },
    onSuccess: (data: { imageUrl: string }) => {
      handleSetFile(data.imageUrl);
    },
  });

  const CreateCardMutation = useMutation({
    mutationFn: async (cardData: CreateCardProps) => await postCards(cardData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [`column-${columnId}`, "cardList"] });
      handleClosing;
    },
  });

  function handleClosing() {
    handleAnimationClosing();
    setTimeout(() => {
      handleClose();
    }, 500);
  }

  function handleSelectWriter(writerInfo: WriterInfo) {
    setWriterInfo(writerInfo);
  }

  if (!dashboardMemberList) {
    return <div>멤버 조회 중 키킼</div>;
  }

  function handleCreateCard(event: FormEvent<HTMLFormElement | HTMLButtonElement>) {
    event.preventDefault();

    const [date, time] = dueDate.split("T");
    if (writerInfo) {
      const data = {
        assigneeUserId: writerInfo.userId,
        dashboardId: dashboardId,
        columnId: columnId,
        title: titleInputValue,
        description: descriptionValue,
        dueDate: `${date} ${time}`,
        tags: tagList,
        imageUrl: imageFile ? imageFile : "null",
      };
      CreateCardMutation.mutate(data);
    }
  }

  function handleTagList(tagText: string) {
    setTagList(prevList => [...prevList, tagText]);
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
          <S.CreateForm onSubmit={handleCreateCard}>
            <S.TitleInput
              type="text"
              placeholder="제목을 입력해주세요"
              value={titleInputValue}
              onChange={handleChangeValue}
            />
            <S.CardAttributes>
              <DateInput dateValue={dueDate} onChange={handleChangDateValue} />
              <DropDown
                currentSelectWriter={writerInfo}
                handleSelectWriter={handleSelectWriter}
                dataList={dashboardMemberList.members}
                isOpen={isOpenDropDown}
                handleToggle={handleToggle}
              />
            </S.CardAttributes>
            <FileInput onChange={handleImageChange} selectImage={imageUrl} />

            <TextArea onChange={handleChangeCardContent} value={descriptionValue} placeholder={"설명을 적어주세요"} />
            <AddTag handleAddList={handleTagList} tagList={tagList} />
            <S.ButtonContainer>
              <Button
                onClick={handleClosing}
                styleVariant="white"
                exceptionStyle="max-width : 12rem; padding : 1rem 2rem; border-radius : 0.4rem;">
                취소
              </Button>
              <Button type="button" onClick={handleCreateCard}>
                생성
              </Button>
            </S.ButtonContainer>
          </S.CreateForm>
        </S.PageContent>
      </S.PageContainer>
    </Portal>
  );
};

export default CreateCard;
