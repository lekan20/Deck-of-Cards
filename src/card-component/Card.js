import React from "react";

const suitIcons = {
  CLUBS: "♣",
  HEARTS: "♥",
  SPADES: "♠",
  DIAMONDS: "♦"
}

const valueIcons = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9",
  10: "10",
  JACK: "J",
  QUEEN: "Q",
  KING: "K",
  JOKER: "Joker",
  ACE: "A"
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {

    return (
        <div className={`card ${this.props.card.suit}`}>
          <div className="card-topleft">
              {valueIcons[this.props.card.value]}
          </div>
            <div className="card-suit">
              {suitIcons[this.props.card.suit]}
            </div>
          <div className="card-bottomright">
            {valueIcons[this.props.card.value]}
          </div>
        </div>

    );
  }
}

export default Card;
