import React from "react";
import ReactDOM from "react-dom";
import CardApi from "../api/cardApi"


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
      <div> {this.state.card.code} </div>
    );
  }
}

export default Card;
