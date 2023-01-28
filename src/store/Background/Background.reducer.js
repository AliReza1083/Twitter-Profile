import { BACKGROUND } from "./Background.types";

const INITIAL_VALUE = {
  background: {
    from: "#0965C0",
    to: "#C53A94",
  },
  rotate: 0,
  numberFormat: false,
  downloadLoading: false,
};

export const backgroundReducer = (state = INITIAL_VALUE, { type, payload }) => {
  switch (type) {
    case BACKGROUND.background:
      return { ...state, background: payload };
    case BACKGROUND.rotate:
      return { ...state, rotate: payload };
    case BACKGROUND.numberFormat:
      return { ...state, numberFormat: payload };
    case BACKGROUND.downloadLoading:
      return { ...state, downloadLoading: payload };
    default:
      return state;
  }
};
