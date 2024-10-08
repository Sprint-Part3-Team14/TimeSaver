import { IconProps } from "../../types/IconType";

const DeleteIcon = ({ width, height, color = "#9FA6B2" }: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 16 16" fill="none">
      <path
        d="M2.6 3.6H13.4V14C13.4 14.7732 12.7732 15.4 12 15.4H4C3.2268 15.4 2.6 14.7732 2.6 14V3.6Z"
        stroke={color}
        stroke-width="1.2"
      />
      <path
        d="M5.48387 1.57312C5.72102 1.09882 6.20579 0.799219 6.73607 0.799219H9.26393C9.79421 0.799219 10.279 1.09882 10.5161 1.57312L11.5292 3.59922H4.47082L5.48387 1.57312Z"
        stroke={color}
        stroke-width="1.2"
      />
      <rect x="0.5" y="3" width="15" height="1.2" rx="0.6" fill={color} />
      <rect x="8.59961" y="6" width="7" height="1.2" rx="0.6" transform="rotate(90 8.59961 6)" fill={color} />
      <rect x="11.2002" y="6" width="7" height="1.2" rx="0.6" transform="rotate(90 11.2002 6)" fill={color} />
      <rect x="6.2002" y="6" width="7" height="1.2" rx="0.6" transform="rotate(90 6.2002 6)" fill={color} />
    </svg>
  );
};

export default DeleteIcon;
