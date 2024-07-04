import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: "Inter";
    src: url("https://db.onlinewebfonts.com/t/1130e1ae4e4a76c7118c0b35c4b9d019.eot");
    src: url("https://db.onlinewebfonts.com/t/1130e1ae4e4a76c7118c0b35c4b9d019.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/1130e1ae4e4a76c7118c0b35c4b9d019.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/1130e1ae4e4a76c7118c0b35c4b9d019.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/1130e1ae4e4a76c7118c0b35c4b9d019.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/1130e1ae4e4a76c7118c0b35c4b9d019.svg#Inter")format("svg");
}
`;

export default FontStyles;
