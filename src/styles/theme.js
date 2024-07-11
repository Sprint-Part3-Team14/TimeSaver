const theme = {
  color: {
    white: "#ffffff",
    black900: "#000000",
    black800: "#171717",
    black700: "#333236",
    black600: "#4b4b4b",
    blackOverlay: "rgba(0,0,0, 0.7)",
    gray900: "#787486",
    gray800: "#9fa6b2",
    gray700: "#d9d9d9",
    gray600: "#eeeeee",
    gray500: "#fafafa",
    pink900: "#ff7b7b",
    pink400: "#ffcece",
    blue400: "#76a5ea",
  },

  fontSize: {
    large: "18rem",
    normal: "16rem",
    small: "14rem",
    extraSmall: "1.2rem",
  },

  device: {
    tablet: "screen and (max-width: 1124px)",
    mobile: "screen and (max-width: 768px)",
  },

  //이런식으로 사용해도 되긴하는데? 원하면 사용하는걸로

  displays: {
    spaceBetween: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    columnCenter: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    rowCenter: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  },
};

export default theme;
