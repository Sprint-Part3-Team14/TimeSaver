import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import ResetStyles from "./styles/resetStyles";
import GlobalStyles from "./styles/globalStyles";
import FontStyles from "./styles/fontStyles";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ThemeProvider theme={theme}>
    <ResetStyles />
    <GlobalStyles />
    <FontStyles />
    <App />
  </ThemeProvider>
);
