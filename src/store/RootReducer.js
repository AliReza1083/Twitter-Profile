import { combineReducers } from "redux";
import { backgroundReducer } from "./Background/Background.reducer";

export const rootReducer = combineReducers({
  background: backgroundReducer,
});
