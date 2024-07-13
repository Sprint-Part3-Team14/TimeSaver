import formatData from "../../../../utils/formatDate";
import CalendarTodayIcon from "../../../../components/Icons/CalendarTodayIcon";
import * as S from "./CardStyled";

interface CardDataType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  dueDate: string;
  imageUrl: string;
  teamId: string;
  dashboardId: number;
  columnId: number;
  createdAt: string;
  updatedAt: string;
}

const CardList = ({ card }: { card: CardDataType[] }) => {
  return (
    <>
      {card.map(cardData => (
        <S.CardLayout>
          {cardData.imageUrl && <img src={cardData.imageUrl} alt={cardData.title} />}
          <S.CardTitle>{cardData.title}</S.CardTitle>
          <S.CardTagList>
            {cardData.tags.map(tag => (
              <S.Tag>{tag}</S.Tag>
            ))}
          </S.CardTagList>
          <S.CardCreatedAt>
            <CalendarTodayIcon width={18} height={18} color={"#787486"} />
            {formatData(cardData.createdAt)}
          </S.CardCreatedAt>
        </S.CardLayout>
      ))}
    </>
  );
};

export default CardList;
