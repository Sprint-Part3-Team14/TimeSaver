import { KeyboardEvent } from "react";
import useInputValue from "src/hooks/useInputValue";
import * as S from "./AddTagStyled";
import Tag from "./Tag/Tag";

const AddTag = ({ tagList, handleAddList }: { tagList: string[]; handleAddList: (value: string) => void }) => {
  const { value, handleChangeValue, handleResetValue } = useInputValue();

  function handleEnterEvent(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      handleResetValue();
      handleAddList(value);
    }
  }

  return (
    <S.Container>
      <S.Title>태그</S.Title>
      <S.TagInput
        type="input"
        placeholder={"입력 후 Enter"}
        onChange={handleChangeValue}
        value={value}
        onKeyDown={handleEnterEvent}
      />
      <S.TagContainer>
        {tagList.map((tag, index) => (
          <Tag key={`${index}${tag}`} text={tag} />
        ))}
      </S.TagContainer>
    </S.Container>
  );
};

export default AddTag;
