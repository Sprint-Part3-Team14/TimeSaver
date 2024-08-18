import { MouseEvent } from "react";
import ArrowDropdownIcon from "src/components/Icons/ArrowDropdownIcon";
import ArrowDropUpIcon from "src/components/Icons/ArrowDropupIcon";
import UserProfile from "src/components/UserProfile/UserProfile";
import { MembersData } from "../CreateCard";
import * as S from "./DopDownStyled";

const DropDown = ({
  isOpen,
  handleToggle,
  dataList,
}: {
  isOpen: boolean;
  handleToggle: (event: MouseEvent<HTMLDivElement>) => void;
  dataList: MembersData[];
}) => {
  return (
    <S.DropDownContainer onClick={handleToggle}>
      <UserProfile profileImageUrl={null} nickName="김유경" />
      {isOpen ? <ArrowDropUpIcon width={8} height={8} /> : <ArrowDropdownIcon width={8} height={8} />}
      {isOpen && (
        <S.DropDownUnder>
          {dataList.map(member => (
            <UserProfile profileImageUrl={member.profileImageUrl} nickName={member.nickname} />
          ))}
        </S.DropDownUnder>
      )}
    </S.DropDownContainer>
  );
};

export default DropDown;
