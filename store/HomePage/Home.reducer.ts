import { HOMEPAGE } from "./HomeTypes";

import { Actions } from "../hook";

const INITIAL_VALUE = {
  rotate: 0,
};

export const homeReducer = (
  state: { rotate: number } = INITIAL_VALUE,
  { type, payload }: Actions
) => {
  switch (type) {
    case HOMEPAGE.ROTATE:
      return { ...state, rotate: payload };
    default:
      return state;
  }
};
