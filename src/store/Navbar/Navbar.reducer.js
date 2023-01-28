const INITIAL_VALUE = {
  isOpen: false,
};

export const navbarReducer = (state = INITIAL_VALUE, { type, payload }) => {
  switch (type) {
    case "NAVBAR":
      return { ...state, isOpen: payload };
    default:
      return state;
  }
};
