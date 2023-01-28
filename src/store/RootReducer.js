import { combineReducers } from "redux";
import { backgroundReducer } from "./Background/Background.reducer";
import { navbarReducer } from "./Navbar/Navbar.reducer";

export const rootReducer = combineReducers({
  background: backgroundReducer,
  navbar: navbarReducer,
});
