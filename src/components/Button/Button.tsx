import * as S from "./ButtonStyeld";

/**
 * Button Component
 *
 * @param fontSize : large : 18rem , small : 14rem, extraSmall : 12rem
 * @param styleVariant : default pink , white
 * @param size :  large : 14rem, normal : 7rem , small : 6rem
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fontSize?: "large" | "small" | "extraSmall";
  styleVariant?: "default" | "white";
  size?: "large" | "normal" | "small";
  width?: string;
  exceptionStyle?: string;
}

const Button = ({
  children,
  onClick,
  onKeyDown,
  type = "button",
  fontSize = "small",
  styleVariant = "default",
  size = "normal",
  width = "100%",
  disabled,
  exceptionStyle,
}: ButtonProps) => {
  return (
    <S.Container
      type={type}
      onClick={onClick}
      onKeyDown={onKeyDown}
      fontSize={fontSize}
      styleVariant={styleVariant}
      size={size}
      width={width}
      disabled={disabled}
      exceptionStyle={exceptionStyle}>
      {children}
    </S.Container>
  );
};

export default Button;
