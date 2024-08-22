import { KeyboardEvent } from "react";
import useInputValue from "src/hooks/useInputValue";
import * as S from "./AddTagStyled";
import Tag from "./Tag/Tag";

const AddTag = ({
  tagList,
  handleAddList,
  isEdit,
}: {
  tagList: string[];
  handleAddList: (value: string) => void;
  isEdit: boolean;
}) => {
  const { value, handleChangeValue, handleResetValue } = useInputValue();

  function handleEnterEvent(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter") {
      event.preventDefault();

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
          <Tag key={`${index}${tag}`} text={tag} isEdit={isEdit} />
        ))}
      </S.TagContainer>
    </S.Container>
  );
};

export default AddTag;
