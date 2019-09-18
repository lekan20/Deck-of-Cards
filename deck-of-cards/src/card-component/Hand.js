import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card"


class Hand extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      // Create for loop to print out five version of the cards
      <div>
      <Card deckId={this.props.deckId} />
      <Card deckId={this.props.deckId} />
      <Card deckId={this.props.deckId} />
      </div>
    )
  }
}

export default Hand;
