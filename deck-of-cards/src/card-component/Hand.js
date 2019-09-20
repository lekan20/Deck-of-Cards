import React from "react";
import Card from "./Card"


class Hand extends React.Component {

  getCards = () => {
    let cards = [];
    this.props.cards && this.props.cards.forEach((card, index) => {
      cards.push(<Card key={index} card={card} />)
    })

    return cards;
  }

  render() {

    return (


      <div className="center">
        {this.getCards()}
      </div>
    )
  }
}

export default Hand;
