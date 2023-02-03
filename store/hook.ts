import { HOMEPAGE } from "./HomePage/HomeTypes";

interface IRotate {
  type: HOMEPAGE.ROTATE;
  payload: number;
}

interface IGradient {
  type: HOMEPAGE.GRADIENT;
  payload: { from: string; to: string };
}

export type Actions = IRotate | IGradient;
