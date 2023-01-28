import { NAVBAR } from "./Navbar.types";

const INITIAL_VALUE = {
  isOpen: false,
  dark: false,
};

export const navbarReducer = (state = INITIAL_VALUE, { type, payload }) => {
  switch (type) {
    case NAVBAR.isOpen:
      return { ...state, isOpen: payload };
    case NAVBAR.dark:
      return { ...state, dark: payload };
    default:
      return state;
  }
};
