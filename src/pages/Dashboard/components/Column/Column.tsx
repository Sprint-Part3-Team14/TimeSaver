import theme from "src/styles/theme";
import Card from "../Card";
import { ColumnDataType } from "../../Dashboard";
import SettingIcon from "../../../../components/Icons/SettingIcon";
import * as S from "./ColumnStyled";

interface ColumnPropType {
  columnData: ColumnDataType;
  columnTitle: string;
  columnId: number;
}

const Column = ({ columnData, columnTitle, columnId }: ColumnPropType) => {
  console.log("columnId", columnId);
  return (
    <S.DashboardColumnLayout>
      <S.ColumnHeader>
        <S.ColumnName>{columnTitle}</S.ColumnName>
        <S.CardCount>{columnData.totalCount}</S.CardCount>
        <S.SettingIconLayout>
          <SettingIcon width={24} height={24} color={theme.color.black600} />
        </S.SettingIconLayout>
      </S.ColumnHeader>
      {columnData.cards.map(card => (
        <Card card={card} />
      ))}
    </S.DashboardColumnLayout>
  );
};

export default Column;
