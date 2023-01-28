import { NAVBAR } from "./Navbar.types";

export const navbarActions = (value) => ({
  type: NAVBAR.isOpen,
  payload: !value,
});

export const darkActions = (value) => ({
  type: NAVBAR.dark,
  payload: !value,
});
