import { FormEvent, useEffect, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import useToggle from "src/hooks/useToggle";
import Button from "src/components/Button/Button";
import { getMembers, postCardImageFetch, postCards, putCard } from "src/utils/api";
import useInputValue from "src/hooks/useInputValue";
import useInputImage from "src/hooks/useInputFile";
import TextArea from "src/components/TextArea/TextArea";
import FileInput from "src/components/FileInput/FileInput";
import { CurrentIdListType } from "../Card/Card";
import DateInput from "./DateInput/DateInput";
import DropDown from "./DropDown/DropDown";
import AddTag from "./AddTag/AddTag";
import * as S from "./CreateCardStyled";
import type { CreateCard as CreateCardProps, DetailCard, FixCard } from "src/utils/apiType";
import type { GetMembersResponse } from "src/utils/apiResponseType";
import type { WriterInfo } from "./CreateCardType";

const CreateCard = ({
  currentIdList,
  handleClosePage,
  initialData,
}: {
  handleClosePage: () => void;
  initialData?: DetailCard;
  currentIdList: CurrentIdListType;
}) => {
  const { dashboardId, columnId, cardId } = currentIdList;
  const { value: titleInputValue, handleChangeValue, handleSetValue: handleInitialTitle } = useInputValue();
  const {
    value: dueDate,
    handleChangeValue: handleChangDateValue,
    handleSetValue: handleInitialDate,
  } = useInputValue();
  const [writerInfo, setWriterInfo] = useState<WriterInfo>();
  const {
    value: descriptionValue,
    handleChangeValue: handleChangeCardContent,
    handleSetValue: handleInitialDescription,
  } = useInputValue();
  const { imageUrl, handleImageChange, handleSetFile, imageFile, handleSetUrl } = useInputImage(
    ({ file }: { file: File }) => {
      CardImageMutation.mutate({ columnId: columnId, image: file });
    }
  );
  const [tagList, setTagList] = useState<string[]>([]);

  const { isTrue: isOpenDropDown, handleToggle } = useToggle();

  const queryClient = useQueryClient();

  useEffect(() => {
    if (initialData) {
      const { title, dueDate, assignee, description, tags, imageUrl } = initialData;
      handleInitialTitle(title);
      handleInitialDate(dueDate);
      handleSelectWriter({
        nickName: assignee.nickname,
        profileImageUrl: assignee.profileImageUrl,
        userId: assignee.id,
      });
      handleInitialDescription(description);
      handleSetUrl(imageUrl);
      handleSetTagList(tags);
    }
  }, []);

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
      handleClosePage();
    },
  });

  const EditCardMutation = useMutation({
    mutationFn: async ({ cardId, cardData }: { cardId: number; cardData: FixCard }) => await putCard(cardId, cardData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cardDetail", cardId] });
      handleClosePage();
    },
  });

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
      if (!imageFile) {
        imageUrl;
      }
      const data = {
        assigneeUserId: writerInfo.userId,
        dashboardId: dashboardId,
        columnId: columnId,
        title: titleInputValue,
        description: descriptionValue,
        dueDate: dueDate.includes("T") ? `${date} ${time}` : dueDate,
        tags: tagList,
        imageUrl: imageFile ? imageFile : imageUrl ? imageUrl : "null",
      };

      if (initialData) {
        if (cardId) {
          EditCardMutation.mutate({ cardId: cardId, cardData: data });
        }
      } else {
        CreateCardMutation.mutate(data);
      }
    }
  }

  function handleTagList(tagText: string) {
    setTagList(prevList => [...prevList, tagText]);
  }

  function handleSetTagList(tagList: string[]) {
    setTagList(tagList);
  }

  return (
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
        <AddTag handleAddList={handleTagList} tagList={tagList} isEdit={true} />
        <S.ButtonContainer>
          <Button styleVariant="white" exceptionStyle={S.ButtonAddStyle}>
            취소
          </Button>
          <Button type="button" onClick={handleCreateCard}>
            {initialData ? "수정" : "생성"}
          </Button>
        </S.ButtonContainer>
      </S.CreateForm>
    </S.PageContent>
  );
};

export default CreateCard;
