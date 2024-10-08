import { SubColorIconProps } from "../../types/IconType";

const ErrorIcon = ({ width, height, color = "#FEEBEB", subColor = "#EF4444" }: SubColorIconProps) => {
  return (
    <svg width={width} height={height} viewBox="0 0 238 238" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="238" height="238" rx="32" fill={color} />
      <circle cx="118.5" cy="118.5" r="79.5" fill={subColor} />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M84.0018 84.0021C82.2444 85.7595 82.2444 88.6087 84.0018 90.3661L112.64 119.004L84.0018 147.642C82.2444 149.399 82.2444 152.248 84.0018 154.006C85.7591 155.763 88.6084 155.763 90.3657 154.006L119.004 125.368L147.641 154.006C149.399 155.763 152.248 155.763 154.005 154.006C155.763 152.248 155.763 149.399 154.005 147.642L125.368 119.004L154.005 90.3661C155.763 88.6087 155.763 85.7595 154.005 84.0021C152.248 82.2448 149.399 82.2448 147.641 84.0021L119.004 112.64L90.3657 84.0021C88.6084 82.2448 85.7591 82.2448 84.0018 84.0021Z"
        fill="white"
      />
    </svg>
  );
};

export default ErrorIcon;
