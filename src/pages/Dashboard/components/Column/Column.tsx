import { useQuery } from "@tanstack/react-query";
import { CardListSearch, DetailCard } from "src/utils/apiType";
import theme from "src/styles/theme";
import { getCardList } from "src/utils/api";
import useToggle from "src/hooks/useToggle";
import PlusIcon from "src/components/Icons/PlusIcon";
import SettingIcon from "src/components/Icons/SettingIcon";
import Card from "../Card";
import CreateCard from "../CreateCard/CreateCard";
import * as S from "./ColumnStyled";

export interface ColumnDataType {
  cards: DetailCard[];
  totalCount: number;
  cursorId: null;
}

interface ColumnPropType {
  columnTitle: string;
  columnId: number;
  dashboardId: number;
}

const Column = ({ columnTitle, columnId, dashboardId }: ColumnPropType) => {
  const { isTrue: isCreateCard, handleTrue: handleCreateCard, handleFalse: handleCloseCreateCard } = useToggle();
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
    <>
      {isCreateCard && <CreateCard handleClose={handleCloseCreateCard} dashboardId={dashboardId} />}
      <S.DashboardColumnLayout>
        <S.ColumnHeader>
          <S.ColumnName>{columnTitle}</S.ColumnName>
          <S.CardCount>{cardList.totalCount}</S.CardCount>
          <S.SettingIconLayout>
            <SettingIcon width={24} height={24} color={theme.color.black600} />
          </S.SettingIconLayout>
        </S.ColumnHeader>
        <S.AddCard type="button" onClick={handleCreateCard}>
          <S.RowCenter>
            <PlusIcon width={22} height={22} color={theme.color.pink900} />
          </S.RowCenter>
        </S.AddCard>
        {cardList.cards.map(card => (
          <Card card={card} currentIdList={{ dashboardId: dashboardId, columnId: columnId, cardId: card.id }} />
        ))}
      </S.DashboardColumnLayout>
    </>
  );
};

export default Column;
