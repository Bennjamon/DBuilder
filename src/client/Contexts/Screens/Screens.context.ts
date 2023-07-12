import { createContext } from "react";
import { initialState } from "./initialState";

const ScreensContext = createContext(initialState);

export default ScreensContext;
