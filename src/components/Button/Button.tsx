import * as S from "./ButtonStyeld";

/**
 * Button Component
 *
 * @param fontSize : large : 18rem , small : 14rem, extraSmall : 12rem
 * @param styleVariant : default (?묓겕) , white
 * @param size : y異??⑤뵫??湲곗?  large : 14rem, normal : 7rem , small : 6rem
 */

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit";
  onClick?: () => void;
  onKeyDown?: () => void;
  fontSize?: "large" | "small" | "extraSmall";
  styleVariant?: "default" | "white";
  size?: "large" | "normal" | "small";
  disabled?: boolean;
  width?: string;
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
      disabled={disabled}>
      {children}
    </S.Container>
  );
};

export default Button;
