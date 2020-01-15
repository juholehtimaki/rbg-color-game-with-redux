import React from "react";
import { useDispatch } from "react-redux";
import { setName } from "../actions/index.js";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Container from "@material-ui/core/Container";

export const Login = () => {
  const dispatch = useDispatch();

  const customSubmit = e => {
    e.preventDefault(); //preventing site from reloading
    dispatch(setName(e.target[0].value)); //forms 1st field aka name in our case, no need to use hooks for now
  };

  return (
    <Container maxWidth="sm">
      <h1>Login</h1>
      <form onSubmit={customSubmit}>
        <div className="form-group">
          <TextField type="text" id="nameField" label="Enter name" />
        </div>
        <Button type="submit" variant="contained" color="primary">
          Confirm
        </Button>
      </form>
    </Container>
  );
};
