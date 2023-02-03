import { HOMEPAGE } from "./HomePage/HomeTypes";

interface IRotate {
  type: HOMEPAGE.ROTATE;
  payload: number;
}

export type Actions = IRotate;
