import useToggle from "src/hooks/useToggle";
import CalendarTodayIcon from "src/components/Icons/CalendarTodayIcon";
import formatData from "src/utils/formatDate";
import UserProfileImage from "src/components/UserProfile/UserProfileImage/UserProfileImage";

import CardDetail from "../../../../components/SidePage/CardDetail/CardDetail";

import * as S from "./CardStyled";

import type { DetailCard } from "src/utils/apiType";

interface CardProps {
  card: DetailCard;
  currentIdList: CurrentIdListType;
}

export interface CurrentIdListType {
  dashboardId: number;
  columnId: number;
  cardId: number;
}

const Card = ({ card, currentIdList }: CardProps) => {
  const { isTrue: isDetail, handleTrue: handleOpenDetail, handleFalse: handleDetailClose } = useToggle();

  return (
    <>
      {isDetail && <CardDetail handleClose={handleDetailClose} currentIdList={currentIdList} />}
      <S.CardLayout onClick={handleOpenDetail}>
        {card.imageUrl && <S.CardThumbnail src={card.imageUrl} alt={card.title} />}
        <S.CardTitle>{card.title}</S.CardTitle>
        <S.CardTagList>
          {card.tags.map((tag, index) => (
            <S.Tag key={index}>{tag}</S.Tag>
          ))}
        </S.CardTagList>
        <S.CardFooter>
          <S.CardCreatedAt>
            <CalendarTodayIcon width={18} height={18} color={"#787486"} />
            {formatData(card.createdAt)}
          </S.CardCreatedAt>
          <UserProfileImage profileImageUrl={card.assignee.profileImageUrl} />
        </S.CardFooter>
      </S.CardLayout>
    </>
  );
};

export default Card;
