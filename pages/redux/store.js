import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

const INITIAL_VALUE = {
  images: [],
};

const imagesReducer = (state = INITIAL_VALUE, { type, payload }) => {
  switch (type) {
    case "ADD":
      return { ...state, images: payload };
    default:
      return state;
  }
};

export const store = createStore(imagesReducer, applyMiddleware(logger));
