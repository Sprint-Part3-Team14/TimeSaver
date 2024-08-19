import { ChangeEvent, TextareaHTMLAttributes } from "react";
import * as S from "./TextAreaStyle";

export interface TextAreaProp extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
  additionalStyle?: string;
}

const TextArea = ({ onChange, value, additionalStyle, ...rest }: TextAreaProp) => {
  return <S.CardExplanation onChange={onChange} value={value} additionalStyle={additionalStyle} {...rest} />;
};

export default TextArea;
