import { HOMEPAGE } from "./home.types";

interface IRotate {
  type: HOMEPAGE.ROTATE;
  payload: number;
}

export type Actions = IRotate;
