import CalendarTodayIcon from "../../../../components/Icons/CalendarTodayIcon";
import formatData from "../../../../utils/formatDate";
import { CardDataType } from "../../Dashboard";
import * as S from "./CardStyled";

const Card = ({ card }: { card: CardDataType }) => {
  return (
    <>
      <S.CardLayout>
        {card.imageUrl && <img src={card.imageUrl} alt={card.title} />}
        <S.CardTitle>{card.title}</S.CardTitle>
        <S.CardTagList>
          {card.tags.map(tag => (
            <S.Tag>{tag}</S.Tag>
          ))}
        </S.CardTagList>
        <S.CardCreatedAt>
          <CalendarTodayIcon width={18} height={18} color={"#787486"} />
          {formatData(card.createdAt)}
        </S.CardCreatedAt>
      </S.CardLayout>
    </>
  );
};

export default Card;
