import ReactDOM from "react-dom/client";

import App from "./App";
import ScreensProvider from "./Contexts/Screens/Screens.provider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ScreensProvider>
    <App />
  </ScreensProvider>
);
