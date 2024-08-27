import { useReducer } from "react";

const DEFAULT_FORM_VALUE = {
  name: "",
  text: "",
  rating: 5,
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload.target.value };
    case "SET_TEXT":
      return { ...state, text: payload.target.value };
    case "INCREMENT_RATING":
      return { ...state, rating: Math.min(state.rating + 1, 5) };
    case "DECREMENT_RATING":
      return { ...state, rating: Math.max(state.rating - 1, 1) };
    case "CLEAR":
      return { ...DEFAULT_FORM_VALUE };
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUE);

  const setName = (e) => dispatch({ type: "SET_NAME", payload: e });

  const setText = (e) => dispatch({ type: "SET_TEXT", payload: e  });

  const incrementRating = () => dispatch({ type: "INCREMENT_RATING" });

  const decrementRating = () => dispatch({ type: "DECREMENT_RATING" });

  const clear = () => dispatch({ type: "CLEAR" });

  return {
    clear,
    form,
    setName,
    incrementRating,
    decrementRating,
    setText,
  };
};