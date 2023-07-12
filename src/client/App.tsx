import { useContext } from "react";
import "./App.css";
import ScreensContext from "./Contexts/Screens/Screens.context";

function App() {
  const { CurrentScreen } = useContext(ScreensContext);

  return (
    <h1>
      <CurrentScreen />
    </h1>
  );
}

export default App;
