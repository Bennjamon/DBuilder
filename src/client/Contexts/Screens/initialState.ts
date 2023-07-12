import MainScreen from "../../Screens/MainScreen";
import { Arguments } from "../../types";
import { ValidScreens } from "./screens";

export interface ScreensState {
  CurrentScreen: (props: any) => JSX.Element;
  changeScreen<K extends keyof ValidScreens>(
    key: K,
    ...args: Arguments<ValidScreens[K]>
  ): void;
  back(): void;
}

export const initialState: ScreensState = {
  CurrentScreen: MainScreen,
  changeScreen() {},
  back() {},
};
