import React from "react";
import "./app.scss";
import Navbar from "./Navbar";
import Main from "./Main";
import Player from "./Player";

const App = () => {
  return (
    <div id="app">
      <Navbar />
      <Main />
      <Player />
    </div>
  );
};

export default App;
