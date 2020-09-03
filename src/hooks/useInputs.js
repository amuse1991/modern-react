import { useState, useCallback, useReducer } from "react";
import inputReducer from "../reducers/input";

function useInputs(initialForm) {
  const [form, dispatch] = useReducer(inputReducer, initialForm);
  //change
  const onChange = event => {
    const { name, value } = event.target;
    dispatch({
      type: "CHANGE_FORM",
      name,
      value
    });
  };
  const reset = () =>
    dispatch({
      type: "RESET_FORM",
      initialForm
    });
  return [form, onChange, reset];
}

export default useInputs;
