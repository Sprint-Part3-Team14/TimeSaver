import CalendarTodayIcon from "../../../../components/Icons/CalendarTodayIcon";
import formatData from "../../../../utils/formatDate";
import { CardDataType } from "../Column/Column";
import * as S from "./CardStyled";

const Card = ({ card, handleOpenDetail }: { card: CardDataType; handleOpenDetail: () => void }) => {
  return (
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
        <S.CardWriterImage src={card.assignee.profileImageUrl} alt={`${card.assignee.nickname}의 프로필 이미지`} />
      </S.CardFooter>
    </S.CardLayout>
  );
};

export default Card;
