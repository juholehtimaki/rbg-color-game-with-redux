import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import "./sass/main.scss";

import { Game } from "./components/Game.jsx";
import { Login } from "./components/Login.jsx";

export const App = () => {
  const name = useSelector(state => state.name);

  return (
    <div className="App">
      {name ? (
        <>
          <h1>Hello {name}!</h1>
          <Game />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
