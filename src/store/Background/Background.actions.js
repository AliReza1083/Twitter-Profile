import { BACKGROUND } from "./Background.types";

export const rotateAction = (value) => ({
  type: BACKGROUND.rotate,
  payload: value,
});

export const backgroundAction = (value) => ({
  type: BACKGROUND.background,
  payload: value,
});
