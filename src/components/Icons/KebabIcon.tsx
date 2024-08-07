const KebabIcon = ({ width, height, color = "#333236" }: { width: number; height: number; color?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 4 21" fill="none">
      <path
        d="M2 21C1.45001 21 0.979183 20.7879 0.58751 20.3636C0.195837 19.9393 0 19.4292 0 18.8334C0 18.2375 0.195837 17.7275 0.58751 17.3032C0.979183 16.8789 1.45001 16.6667 2 16.6667C2.54999 16.6667 3.02082 16.8789 3.41249 17.3032C3.80416 17.7275 4 18.2375 4 18.8334C4 19.4292 3.80416 19.9393 3.41249 20.3636C3.02082 20.7879 2.54999 21 2 21ZM2 12.6666C1.45001 12.6666 0.979183 12.4545 0.58751 12.0302C0.195837 11.6059 0 11.0958 0 10.5C0 9.90419 0.195837 9.39412 0.58751 8.96982C0.979183 8.54551 1.45001 8.33335 2 8.33335C2.54999 8.33335 3.02082 8.54551 3.41249 8.96982C3.80416 9.39412 4 9.90419 4 10.5C4 11.0958 3.80416 11.6059 3.41249 12.0302C3.02082 12.4545 2.54999 12.6666 2 12.6666ZM2 4.33326C1.45001 4.33326 0.979183 4.1211 0.58751 3.69679C0.195837 3.27251 0 2.76245 0 2.16661C0 1.5708 0.195837 1.06074 0.58751 0.636428C0.979183 0.212143 1.45001 0 2 0C2.54999 0 3.02082 0.212143 3.41249 0.636428C3.80416 1.06074 4 1.5708 4 2.16661C4 2.76245 3.80416 3.27251 3.41249 3.69679C3.02082 4.1211 2.54999 4.33326 2 4.33326Z"
        fill={color}
      />
    </svg>
  );
};

export default KebabIcon;
