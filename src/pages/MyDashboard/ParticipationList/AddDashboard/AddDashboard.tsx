import { ButtonHTMLAttributes } from "react";
import PlusIcon from "src/components/Icons/PlusIcon";
import theme from "src/styles/theme";
import * as S from "./AddDashboardStyled";

interface AddDashboardButtonProp extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

const AddDashboard = ({ onClick }: AddDashboardButtonProp) => {
  return (
    <S.Container onClick={onClick}>
      <S.Title>새로운 대시보드</S.Title>
      <PlusIcon width={16} height={16} color={theme.color.pink900} />
    </S.Container>
  );
};

export default AddDashboard;
