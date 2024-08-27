import * as S from "./MembersStyled";
import type { GetMembersResponse } from "src/utils/apiResponseType";

const INDEX_POSITION = [
  "right-0 flex",
  "right-[28px] flex",
  "right-[56px] flex",
  "right-[84px] hidden pc:flex",
  "right-[112px] hidden pc:flex",
];

const CONTAINER_SIZE = ["w-[40px]", "w-[70px]", "w-[100px]", "w-[100px] pc:w-[130px]", "w-[100px] pc:w-[160px]"];

const Members = ({ members, totalCount }: GetMembersResponse) => {
  const extraCount = {
    pc: totalCount > 5 ? totalCount - 4 : 0,
    tablet: totalCount > 3 ? totalCount - 2 : 0,
  };
  const slicedMembers = members.slice(0, 5);
  const containerSize = CONTAINER_SIZE[slicedMembers.length - 1];

  return (
    <S.MembersContainer containerSize={containerSize}>
      {slicedMembers.map((member, index) => (
        <li key={member.id}>
          {member.profileImageUrl ? (
            <ImageMember profileImageUrl={member.profileImageUrl} index={slicedMembers.length - index - 1} />
          ) : (
            <DefaultMember key={member.id} nickname={member.nickname} index={slicedMembers.length - index - 1} />
          )}
        </li>
      ))}
      {extraCount.pc > 0 && <S.ExtraCount className="pc:flex">{`+${extraCount.pc}`}</S.ExtraCount>}
      {extraCount.tablet > 0 && <S.ExtraCount className="pc:hidden">{`+${extraCount.tablet}`}</S.ExtraCount>}
    </S.MembersContainer>
  );
};

export default Members;

interface ImageMemberProps {
  index: number;
  profileImageUrl: string;
}

function ImageMember({ profileImageUrl, index }: ImageMemberProps) {
  const positionClass = INDEX_POSITION[index];
  return (
    <S.MemberImage positionClass={positionClass}>
      <img src={profileImageUrl} style={{ objectFit: "cover" }} alt="멤버 프로필 이미지" />
    </S.MemberImage>
  );
}

const COLOR_LIST = [
  "#5be352", // green
  "#bc57ff", // purple
  "#FFC85A", // orange
  "#9DD7ED", // blue
  "#ff6ee0", // pink
];

interface DefaultMemberProps {
  index: number;
  nickname: string;
}

function DefaultMember({ nickname, index }: DefaultMemberProps) {
  const initial = nickname[0].toUpperCase();
  const colorIndex = initial.charCodeAt(0) % COLOR_LIST.length;
  const color = COLOR_LIST[colorIndex];
  const positionClass = INDEX_POSITION[index];

  return (
    <S.DefaultMemberContainer color={color} positionClass={positionClass}>
      {initial}
    </S.DefaultMemberContainer>
  );
}
