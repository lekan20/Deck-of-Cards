import React from "react";
import ReactDOM from "react-dom";
import CardApi from "../api/cardApi"

const sample = {
  CLUBS: "♣",
  HEARTS: "♥",
  SPADES: "♠",
  DIAMONDS: "♦"
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
          {this.state.card.value}
          {sample[this.state.card.suit]}
        </div>

    );
  }
}

export default Card;
