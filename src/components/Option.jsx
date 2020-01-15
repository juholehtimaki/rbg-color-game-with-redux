import React from "react";
import { useDispatch } from "react-redux";
import { incremenet, decrement } from "../actions/index.js";

export const Option = option => {
  const dispatch = useDispatch();

  const divColor = {
    backgroundColor: `rgb(${option.option.color.r},${option.option.color.g},${option.option.color.r})`
  };

  const clickHandler = () => {
    if (option.option.correctness) {
      dispatch(incremenet());
    } else {
      dispatch(decrement());
    }
  };

  return (
    <div className="color-box" style={divColor} onClick={clickHandler}></div>
  );
};
