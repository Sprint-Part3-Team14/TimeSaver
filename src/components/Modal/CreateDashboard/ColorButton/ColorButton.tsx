import { MouseEvent } from "react";
import CheckIcon from "src/components/Icons/CheckIcon";
import theme from "src/styles/theme";

import * as S from "./ColorButtonStyled";

const ColorButton = ({
  isSelect,
  color,
  handleSelectColor,
}: {
  isSelect: boolean;
  color: string;
  handleSelectColor: (event: MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <S.ButtonBox>
      {isSelect && (
        <S.CheckIcon>
          <CheckIcon width={20} height={20} color={theme.color.white} />
        </S.CheckIcon>
      )}
      <S.ColorButton type="button" color={color} onClick={handleSelectColor} />
    </S.ButtonBox>
  );
};

export default ColorButton;
