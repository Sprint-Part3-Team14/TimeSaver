export interface IconProps {
  width: number;
  height: number;
  color?: string;
}

export interface SubColorIconProps extends IconProps {
  subColor: string;
}

export interface StyleIconProps extends IconProps {
  addStyle?: string;
}
