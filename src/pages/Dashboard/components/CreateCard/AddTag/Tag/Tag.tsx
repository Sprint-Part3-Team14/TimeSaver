import CloseIcon from "src/components/Icons/CloseIcon";
import { useEffect, useState } from "react";
import * as S from "./TagStyled";
import { TAG_COLOR } from "./TagColor";

const Tag = ({ text, isEdit }: { text: string; isEdit?: boolean }) => {
  const [colorIndex, setColorIndex] = useState(0);

  useEffect(() => {
    setColorIndex(Math.floor(Math.random() * TAG_COLOR.length));
  }, [text]);

  return (
    <S.Container textColor={TAG_COLOR[colorIndex]}>
      {text}
      {isEdit && (
        <S.DeleteButton textColor={TAG_COLOR[colorIndex]}>
          <CloseIcon width={8} height={8} color="white" />
        </S.DeleteButton>
      )}
    </S.Container>
  );
};

export default Tag;
