import React from "react";
import {CardType} from "../App";

interface SuiteIcons {
  [key:string]: string
}

interface ValueIcons {
  [key:string]: string
}

const suitIcons: SuiteIcons = {
  CLUBS: "♣",
  HEARTS: "♥",
  SPADES: "♠",
  DIAMONDS: "♦"
};

const valueIcons: ValueIcons = {
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "10": "10",
  JACK: "J",
  QUEEN: "Q",
  KING: "K",
  JOKER: "Joker",
  ACE: "A"
};

interface CardProps {
  card: CardType;
}

// All the values for an individual card that you'll see on the DOM
class Card extends React.Component<CardProps> {
  render() {
    return (
      <div className={`card ${this.props.card.suit}`}>
        <div className="card-topleft"> {valueIcons[this.props.card.value]}</div>
        <div className="card-suit">{suitIcons[this.props.card.suit]}</div>
        <div className="card-bottomright">{valueIcons[this.props.card.value]}</div>
      </div>
    );
  }
}

export default Card;
