import { combineReducers } from "redux";
import { homeReducer } from "./HomePage/Home.reducer";

export const rootReducer = combineReducers({
  homepage: homeReducer,
});
