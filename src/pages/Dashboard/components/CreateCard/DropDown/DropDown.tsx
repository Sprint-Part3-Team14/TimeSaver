import { MouseEvent, useEffect } from "react";
import ArrowDropdownIcon from "src/components/Icons/ArrowDropdownIcon";
import ArrowDropUpIcon from "src/components/Icons/ArrowDropupIcon";
import UserProfile from "src/components/UserProfile/UserProfile";
import { DEFAULT_PROFILEIMAGE_URL } from "src/constant/constant";
import * as S from "./DopDownStyled";
import type { MembersData } from "src/utils/apiResponseType";
import type { WriterInfo } from "../CreateCardType";

const DropDown = ({
  isOpen,
  handleToggle,
  dataList,
  currentSelectWriter,
  handleSelectWriter,
}: {
  isOpen: boolean;
  handleToggle: (event: MouseEvent<HTMLDivElement>) => void;
  dataList: MembersData[];
  currentSelectWriter: WriterInfo | undefined;
  handleSelectWriter: (writerInfo: WriterInfo) => void;
}) => {
  useEffect(() => {
    if (!currentSelectWriter) {
      const initialData = dataList[0];
      handleSelectWriter({
        profileImageUrl: initialData.profileImageUrl ? initialData.profileImageUrl : DEFAULT_PROFILEIMAGE_URL,
        nickName: initialData.nickname,
        userId: initialData.userId,
      });
    }
  }, [currentSelectWriter, dataList, handleSelectWriter]);

  function handleSetWriter(event: MouseEvent<HTMLButtonElement>) {
    const [profileImageUrl, nickName, userId] = event.currentTarget.value.split(" ");
    handleSelectWriter({ profileImageUrl: profileImageUrl, nickName: nickName, userId: Number(userId) });
  }

  return (
    <S.DropDownContainer onClick={handleToggle} isOpen={isOpen}>
      {currentSelectWriter && (
        <UserProfile profileImageUrl={currentSelectWriter.profileImageUrl} nickName={currentSelectWriter.nickName} />
      )}
      {isOpen ? <ArrowDropUpIcon width={8} height={8} /> : <ArrowDropdownIcon width={8} height={8} />}
      {isOpen && (
        <S.DropDownUnder>
          {dataList.map(member => (
            <S.DropDownOne
              as="button"
              type="button"
              key={member.id}
              value={`${member.profileImageUrl} ${member.nickname} ${member.userId}`}
              onClick={handleSetWriter}>
              <UserProfile profileImageUrl={member.profileImageUrl} nickName={member.nickname} />
            </S.DropDownOne>
          ))}
        </S.DropDownUnder>
      )}
    </S.DropDownContainer>
  );
};

export default DropDown;
