import { IconProps } from "../../types/IconType";

const EllipseIcon = ({ width, height, color = "#5534DA" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 6 6" fill="none">
      <circle cx="3" cy="3" r="3" fill={color} />
    </svg>
  );
};

export default EllipseIcon;
