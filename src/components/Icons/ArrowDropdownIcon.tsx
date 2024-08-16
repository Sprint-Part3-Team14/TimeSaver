import { IconProps } from "../../types/IconType";

const ArrowDropdownIcon = ({ width, height, color = "#333236" }: IconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.98064 4.85449L0.566922 1.4408C0.519834 1.39371 0.482747 1.34113 0.455664 1.28306C0.428581 1.22498 0.415039 1.16275 0.415039 1.09638C0.415039 0.963634 0.459926 0.848305 0.549698 0.750389C0.639452 0.652474 0.75776 0.603516 0.904624 0.603516H8.09622C8.24309 0.603516 8.3614 0.652944 8.45115 0.751798C8.54092 0.85067 8.58581 0.966009 8.58581 1.09781C8.58581 1.13078 8.53511 1.24518 8.43371 1.44101L5.02021 4.85452C4.94174 4.93299 4.86062 4.99028 4.77686 5.02639C4.69309 5.0625 4.60094 5.08055 4.50042 5.08055C4.39991 5.08055 4.30776 5.0625 4.22398 5.02639C4.14022 4.99028 4.05911 4.93298 3.98064 4.85449Z"
        fill={color}
      />
    </svg>
  );
};

export default ArrowDropdownIcon;
