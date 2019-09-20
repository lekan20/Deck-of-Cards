import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card"


class Hand extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const cards = []
    for(let i =0; i < 5; i++) {
      cards.push(<Card deckId={this.props.deckId} />)
    }
    return (
      // Create for loop to print out five version of the cards
      <div className="center">
        {cards}
      </div>
    )
  }
}

export default Hand;
