import styled from "styled-components";
import theme from "../../../styles/theme";
import formatData from "../../../util/formatDate";
import CalendarTodayIcon from "../../../components/Icons/CalendarTodayIcon";

// interface CardDataListType {
//   cards: CardDataType[];
//   totalCount: number;
//   cursorId: null;
// }

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

const Card = ({ card }: { card: CardDataType[] }) => {
  return (
    <>
      {card.map(cardData => (
        <CardLayout>
          <CardTitle>{cardData.title}</CardTitle>
          <CardTagList>
            {cardData.tags.map(tag => (
              <Tag>{tag}</Tag>
            ))}
          </CardTagList>
          <CardCreatedAt>
            <CalendarTodayIcon width={18} height={18} color={"#787486"} />
            {formatData(cardData.createdAt)}
          </CardCreatedAt>
        </CardLayout>
      ))}
    </>
  );
};

const CardLayout = styled.div`
  margin-top: 1.6rem;
  background-color: ${theme.color.white};
  border-radius: 0.6rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const CardTitle = styled.h3`
  color: ${theme.color.black700}
  font-weight: 500;
  font-size : 1.6rem;
`;

const CardTagList = styled.div`
  display: flex;
  gap: 1rem;
`;

const Tag = styled.div`
  padding: 0.4rem 0.6rem;
  background-color: ${theme.color.pink400};
  border-radius: 0.4rem;
`;

const CardCreatedAt = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  color: ${theme.color.gray900};
  font-size: 1.2rem;
  font-weight: 500;
`;

export default Card;
