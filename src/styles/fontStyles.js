import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Pretendard-Regular";
    src: url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap")
      format("woff");
    font-weight: 400;
    font-style: normal;
  }
`;

export default FontStyles;
