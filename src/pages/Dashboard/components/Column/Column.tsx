import { useQuery } from "@tanstack/react-query";
import theme from "src/styles/theme";
import useToggle from "src/hooks/useToggle";
import PlusIcon from "src/components/Icons/PlusIcon";
import DeleteIcon from "src/components/Icons/DeleteIcon";
import EditIcon from "src/components/Icons/EditIcon";
import RenameColumnModal from "src/components/Modal/RenameColumn/RenameColumn";
import DeleteColumn from "src/components/Modal/DeleteColumn/DeleteColumn";
import CreateCardPage from "src/components/SidePage/CreateCard/CreateCardPage";
import Button from "src/components/Button/Button";
import { cardQueryKeys } from "src/queryFactory/cardQueryKeys";
import Card from "../Card";
import * as S from "./ColumnStyled";

interface I_ColumnPropType {
  columnTitle: string;
  columnId: number;
  dashboardId: number;
}

const Column = ({ columnTitle, columnId, dashboardId }: I_ColumnPropType) => {
  const { isTrue: isOpenRename, handleTrue: handleOpenRename, handleFalse: handleCloseRename } = useToggle();
  const { isTrue: isOpenDelete, handleTrue: handleOpenDelete, handleFalse: handleCloseDelete } = useToggle();
  const { isTrue: isCreateCard, handleTrue: handleCreateCard, handleFalse: handleCloseCreateCard } = useToggle();
  const { data: cardList } = useQuery({
    ...cardQueryKeys.list(columnId, { size: 10, columnId: columnId }),
    enabled: !!columnId,
  });

  if (!cardList) {
    return <div />;
  }

  return (
    <>
      {isCreateCard && (
        <CreateCardPage
          handleClose={handleCloseCreateCard}
          currentIdList={{ dashboardId: dashboardId, columnId: columnId, cardId: 0 }}
        />
      )}
      {isOpenRename && (
        <RenameColumnModal
          handleClose={handleCloseRename}
          dashboardId={dashboardId}
          columnId={columnId}
          columnTitle={columnTitle}
        />
      )}
      {isOpenDelete && <DeleteColumn handleClose={handleCloseDelete} columnId={columnId} dashboardId={dashboardId} />}
      <S.DashboardColumnLayout>
        <S.ColumnHeader>
          <S.ColumnName>{columnTitle}</S.ColumnName>
          <S.CardCount>{cardList.totalCount}</S.CardCount>
          <S.SettingIconLayout>
            <S.EditColumnButton type="button" onClick={handleOpenRename}>
              <EditIcon width={18} height={18} color={theme.color.gray900} />
            </S.EditColumnButton>
            <S.EditColumnButton type="button" onClick={handleOpenDelete}>
              <DeleteIcon width={16} height={16} color={theme.color.gray900} />
            </S.EditColumnButton>
          </S.SettingIconLayout>
        </S.ColumnHeader>
        <Button styleVariant="white" type="button" onClick={handleCreateCard}>
          <PlusIcon width={22} height={22} color={theme.color.pink900} />
        </Button>
        {cardList.cards.map(card => (
          <Card card={card} currentIdList={{ dashboardId: dashboardId, columnId: columnId, cardId: card.id }} />
        ))}
      </S.DashboardColumnLayout>
    </>
  );
};

export default Column;
