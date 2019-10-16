import React from "react";
import Game from "./Game";
import "./App.css";

export interface CardType {
  code: string;
  suit: string;
  value: string;
}
//
// export interface Deck {
//   // TODO
// }

const App = () => {
  return <Game />;
};

export default App;
