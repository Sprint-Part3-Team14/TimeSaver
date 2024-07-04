import { IconProps } from "../../types/IconType";

const ArrowRightIcon = ({ width, height, color = "#333236" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 28 18" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M0 9H26M26 9L16.5 1M26 9L16.5 16.5" stroke="white" stroke-width="2" />
    </svg>
  );
};

export default ArrowRightIcon;
