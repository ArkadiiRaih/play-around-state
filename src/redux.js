import { createStore } from "redux";

const initialState = {
  count: 0
};

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const RESET = "RESET";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1
      };
    case DECREMENT:
      return {
        count: state.count - 1
      };
    case RESET:
      return {
        count: 0
      };
    default:
      return state;
  }
};

export const increment = () => ({
  type: INCREMENT
});
export const decrement = () => ({
  type: DECREMENT
});
export const reset = () => ({
  type: RESET
});

export const store = createStore(reducer);
