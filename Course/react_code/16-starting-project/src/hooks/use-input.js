import { useReducer } from "react";

const initialInputState = {
  value: "",
  isTouched: false,
};

const inputStateReducer = (prevState, action) => {
  if (action.type === "INPUT") {
    return {
      value: action.value,
      isTouched: prevState.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      isTouched: true,
      value: prevState.value,
    };
  }
  if (action.type === "RESET") {
    return {
      isTouched: false,
      value: "",
    };
  }

  return initialInputState;
};

const useInput = (validateValuFn) => {
  const [inputState, dispatchStateFn] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValuFn(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  const valueChangeHandler = (event) => {
    dispatchStateFn({ type: "INPUT", value: event.target.value });
  };

  const inputBlurHandler = (event) => {
    dispatchStateFn({ type: "BLUR" });
  };

  const reset = () => {
    dispatchStateFn({ type: "RESET" });
  };

  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};
export default useInput;
