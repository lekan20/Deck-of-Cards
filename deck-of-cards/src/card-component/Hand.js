import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card"


class Hand extends React.Component {
  constructor(props) {
    super(props);
  }


  getCards = () => {
    let cards = [];
    this.props.cards && this.props.cards.forEach((card, index) => {
      cards.push(<Card card={card} />)
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
