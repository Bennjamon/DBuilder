import { useEffect, useState } from "react";
import { initialState } from "./initialState";
import { Arguments } from "../../types";
import { ValidScreens, screens } from "./screens";
import ScreensContext from "./Screens.context";

export default function ScreensProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentScreen, setCurrentScreen] = useState(
    () => initialState.CurrentScreen
  );
  const [history, setHistory] = useState<((props: any) => JSX.Element)[]>([]);

  const changeScreen = <K extends keyof ValidScreens>(
    key: K,
    ...args: Arguments<ValidScreens[K]>
  ) => {
    if (key in screens) {
      const screen = screens[key];

      if (currentScreen !== screen) {
        setCurrentScreen(() => screen);
      }
    }
  };

  const back = () => {
    const previousScreen = history.at(-2) || initialState.CurrentScreen;

    setHistory(history.slice(0, -1));
    setCurrentScreen(() => previousScreen);
  };

  useEffect(() => {
    setHistory((history) => [...history, currentScreen]);
  }, [currentScreen]);

  return (
    <ScreensContext.Provider
      value={{ CurrentScreen: currentScreen, changeScreen, back }}
    >
      {children}
    </ScreensContext.Provider>
  );
}
