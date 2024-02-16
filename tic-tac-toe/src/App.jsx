import { useState } from "react";
import "./App.css";
import "./index.css";
import Board from "./components/Board";
import { e } from "mathjs";

function App() {
  return (
    <>
      <h1>Tic Tac Toe game</h1>
      <Board />
    </>
  );
}

export default App;
