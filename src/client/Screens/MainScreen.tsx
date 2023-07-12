import { useContext } from "react";
import ScreensContext from "../Contexts/Screens/Screens.context";

export default function MainScreen() {
  const { changeScreen } = useContext(ScreensContext);

  const handleClick = () => {
    changeScreen("other");
  };

  return (
    <div>
      <h1>This is the main screen</h1>
      <button onClick={handleClick}>Go to other screen</button>
    </div>
  );
}
