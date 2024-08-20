import CloseIcon from "src/components/Icons/CloseIcon";
import * as S from "./TagStyled";
import { TAG_COLOR } from "./TagColor";

const Tag = ({ text }: { text: string }) => {
  const colorIndex = Math.floor(Math.random() * TAG_COLOR.length);

  return (
    <S.Container textColor={TAG_COLOR[colorIndex]}>
      {text}
      <S.DeleteButton textColor={TAG_COLOR[colorIndex]}>
        <CloseIcon width={8} height={8} color="white" />
      </S.DeleteButton>
    </S.Container>
  );
};

export default Tag;
