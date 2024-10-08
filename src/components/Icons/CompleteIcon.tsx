import { SubColorIconProps } from "../../types/IconType";

const CompleteIcon = ({ width, height, color = "#DCFCE7", subColor = "#22C55E" }: SubColorIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 238 238" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="238" height="238" rx="32" fill={color} />
      <circle cx="118.5" cy="118.5" r="79.5" fill={subColor} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M75.4554 120.418C73.6981 122.175 73.6981 125.024 75.4554 126.782L103.862 155.189C104.845 156.172 106.17 156.605 107.454 156.488C108.523 156.43 109.576 155.993 110.393 155.176L166.265 99.304C168.023 97.5466 168.023 94.6974 166.265 92.94C164.508 91.1827 161.659 91.1827 159.901 92.94L107.122 145.72L81.8194 120.418C80.062 118.66 77.2128 118.66 75.4554 120.418Z"
        fill="white"
      />
    </svg>
  );
};

export default CompleteIcon;
