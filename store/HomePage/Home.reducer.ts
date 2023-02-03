import { HOMEPAGE } from "./HomeTypes";

import { Actions } from "../hook";

interface IHomeReducer {
  rotate: number;
  gradient: { from: string; to: string };
}

const INITIAL_VALUE: IHomeReducer = {
  rotate: 0,
  gradient: { from: "#0965C0", to: "#C53A94" },
};

export const homeReducer = (
  state = INITIAL_VALUE,
  { type, payload }: Actions
) => {
  switch (type) {
    case HOMEPAGE.ROTATE:
      return { ...state, rotate: payload };
    case HOMEPAGE.GRADIENT:
      return { ...state, gradient: payload };
    default:
      return state;
  }
};
