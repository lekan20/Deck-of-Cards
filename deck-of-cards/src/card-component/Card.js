import React from "react";
import ReactDOM from "react-dom";
import CardApi from "../api/cardApi"

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
    this.newCard = new CardApi();
    this.state = {
      card: {}
    }
  }

  // call draw card on compoent did mount
  componentDidMount() {
    this.newCard.drawCards(this.props.deckId)
    .then((resp) => resp.json())
    .then((resp) => {
      this.setState({
        card: resp.cards[0]
      });
    })
  }


  render() {

    return (
        <div className="card">
          <div className="card-topleft">
              {valueIcons[this.state.card.value]}
          </div>
            <div className="card-suit">
              {suitIcons[this.state.card.suit]}
            </div>
          <div className="card-bottomright">
            {valueIcons[this.state.card.value]}
          </div>
        </div>

    );
  }
}

export default Card;
