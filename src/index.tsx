import ReactDOM from "react-dom/client";
import App from "./App";
import ResetStyles from "./styles/resetStyles";
import GlobalStyles from "./styles/globalStyles";
import FontStyles from "./styles/fontStyles";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <ResetStyles />
    <GlobalStyles />
    <FontStyles />
    <App />
  </>
);
