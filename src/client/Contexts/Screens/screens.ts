import MainScreen from "../../Screens/MainScreen";
import OtherScreen from "../../Screens/OtherScreen";

export const screens = {
  main: MainScreen,
  other: OtherScreen,
};

export type ValidScreens = typeof screens;
