import { ChangeEvent, InputHTMLAttributes, ReactNode } from "react";
import * as S from "./FileInputStyled";

export interface FileInputProps extends InputHTMLAttributes<HTMLInputElement> {
  selectImage: string | undefined;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
}

const FileInput = ({ selectImage, onChange, children, ...rest }: FileInputProps) => {
  return (
    <S.ThumbNailContainer>
      {selectImage && <S.ThumbNailImage src={selectImage} alt="이미지" />}
      <S.InputImageLabel htmlFor="image-file">{children}</S.InputImageLabel>
      <S.InputImage id="image-file" type="file" onChange={onChange} {...rest} />
    </S.ThumbNailContainer>
  );
};

export default FileInput;
