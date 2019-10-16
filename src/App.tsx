import React from "react";
import Game from "./Game";
import "./App.css";

export interface CardType {
  code: string;
  suit: string;
  value: string;
}

export interface Deck {
  deck_id: string;
  remaining: number;
  shuffled: boolean;
  success: boolean;
}

const App = () => {
  return <Game />;
};

export default App;
