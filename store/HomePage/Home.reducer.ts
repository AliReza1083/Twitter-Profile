import { HOMEPAGE } from "./home.types";

const INITIAL_VALUE = {
  gradient: { from: "#0965C0", to: "#C53A94" },
  rotate: 0,
};

export const homeReducer = (state = INITIAL_VALUE, { type, payload }) => {
  switch (type) {
    case HOMEPAGE.gradient:
      return { ...state, gradient: payload };
    case HOMEPAGE.rotate:
      return { ...state, rotate: payload };
    default:
      return state;
  }
};
