import { NAVBAR } from "./Navbar.types";

const INITIAL_VALUE = {
  isOpen: false,
  dark: false,
  upload: false,
};

export const navbarReducer = (state = INITIAL_VALUE, { type, payload }) => {
  switch (type) {
    case NAVBAR.isOpen:
      return { ...state, isOpen: payload };
    case NAVBAR.dark:
      return { ...state, dark: payload };
    case NAVBAR.upload:
      return { ...state, upload: payload };
    default:
      return state;
  }
};
