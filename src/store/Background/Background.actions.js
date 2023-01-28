import { BACKGROUND } from "./Background.types";

export const rotateAction = (value) => ({
  type: BACKGROUND.rotate,
  payload: value,
});

export const backgroundAction = (value) => ({
  type: BACKGROUND.background,
  payload: value,
});

export const numberFormatAction = (value) => ({
  type: BACKGROUND.numberFormat,
  payload: value,
});

export const downloadLoadingAction = (value) => ({
  type: BACKGROUND.downloadLoading,
  payload: value,
});
