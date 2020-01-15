import React from "react";
import { useDispatch } from "react-redux";
import { setName } from "../actions/index.js";

export const Login = () => {
  const dispatch = useDispatch();

  const customSubmit = e => {
    e.preventDefault(); //preventing site from reloading
    dispatch(setName(e.target[0].value)); //forms 1st field aka name in our case, no need to use hooks for now
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={customSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="nameField"
            placeholder="Enter name"
          />
        </div>
        <button type="submit">Confirm</button>
      </form>
    </div>
  );
};
