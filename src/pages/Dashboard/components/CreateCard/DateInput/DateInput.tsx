import { ChangeEvent } from "react";
import * as S from "./DateInputStyled";

const DateInput = ({
  dateValue,
  onChange,
}: {
  dateValue: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <S.DateContainer>
      <S.DateLabel htmlFor="date">마감일</S.DateLabel>
      <S.DateInputStyle required type="datetime-local" id="date" value={dateValue} onChange={onChange} />
    </S.DateContainer>
  );
};

export default DateInput;
