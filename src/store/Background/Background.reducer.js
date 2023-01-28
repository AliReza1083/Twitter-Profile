import { BACKGROUND } from "./Background.types";

const INITIAL_VALUE = {
  background: {
    from: "#0965C0",
    to: "#C53A94",
  },
  rotate: 0,
};

export const backgroundReducer = (state = INITIAL_VALUE, { type, payload }) => {
  switch (type) {
    case BACKGROUND.background:
      return { ...state, background: payload };
    case BACKGROUND.rotate:
      return { ...state, rotate: payload };
    default:
      return state;
  }
};
