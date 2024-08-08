import { useQuery } from "@tanstack/react-query";
import { CardListSearch, DetailCard } from "src/utils/apiType";
import theme from "src/styles/theme";
import { getCardList } from "src/utils/api";
import PlusIcon from "src/components/Icons/PlusIcon";
import SettingIcon from "src/components/Icons/SettingIcon";
import Card from "../Card";
import * as S from "./ColumnStyled";

export interface ColumnDataType {
  cards: DetailCard[];
  totalCount: number;
  cursorId: null;
}

interface ColumnPropType {
  columnTitle: string;
  columnId: number;
}

const Column = ({ columnTitle, columnId }: ColumnPropType) => {
  const { data: cardList } = useQuery({
    queryKey: [`column-${columnId}`, "cardList"],
    queryFn: async (): Promise<ColumnDataType> => {
      const queryParams: CardListSearch = {
        size: 10,
        cursorId: 10,
        columnId: columnId,
      };
      return await getCardList(queryParams);
    },
    enabled: !!columnId,
  });

  if (!cardList) {
    return <div>로딩 중...</div>;
  }

  return (
    <S.DashboardColumnLayout>
      <S.ColumnHeader>
        <S.ColumnName>{columnTitle}</S.ColumnName>
        <S.CardCount>{cardList.totalCount}</S.CardCount>
        <S.SettingIconLayout>
          <SettingIcon width={24} height={24} color={theme.color.black600} />
        </S.SettingIconLayout>
      </S.ColumnHeader>
      <S.AddColumn>
        <S.RowCenter>
          <PlusIcon width={22} height={22} color={theme.color.pink900} />
        </S.RowCenter>
      </S.AddColumn>
      {cardList.cards.map(card => (
        <Card card={card} cardId={card.id} />
      ))}
    </S.DashboardColumnLayout>
  );
};

export default Column;
