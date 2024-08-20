import * as S from "./AddTagStyled";
import Tag from "./Tag/Tag";

const AddTag = ({ tagList }: { tagList: string[] }) => {
  return (
    <S.Container>
      <S.Title>태그</S.Title>
      <S.TagInput type="input" placeholder={"입력 후 Enter"} />
      <S.TagContainer>
        {tagList.map((tag, index) => (
          <Tag key={`${index}${tag}`} text={tag} />
        ))}
      </S.TagContainer>
    </S.Container>
  );
};

export default AddTag;
