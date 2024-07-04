import { SubColorIconProps } from "../../types/IconType";

const WarningIcon = ({ width, height, color = "#FFEDD5", subColor = "#FA832E" }: SubColorIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 238 238" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="238" height="238" rx="32" fill={color} />
      <circle cx="118.5" cy="118.5" r="79.5" fill={subColor} />
      <path
        d="M114.5 85.5C114.5 83.0147 116.515 81 119 81V81C121.485 81 123.5 83.0147 123.5 85.5V128.5C123.5 130.985 121.485 133 119 133V133C116.515 133 114.5 130.985 114.5 128.5V85.5Z"
        fill="white"
      />
      <rect x="112" y="147" width="13" height="13" rx="6.5" fill="white" />
    </svg>
  );
};

export default WarningIcon;
