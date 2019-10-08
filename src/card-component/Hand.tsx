import React from "react";
import Card from "./Card";

interface HandProps {
  cards: React.ReactNode[];
}

// Pass cards down to the card properties to the card component
// Iterate through the API object to get values of each card
class Hand extends React.Component<HandProps> {
  render() {
    return (
      <div className="center">
        {this.props.cards.map((card: React.ReactNode, index: number) => (
          <Card key={index} card={card} />
        ))}
      </div>
    );
  }
}

export default Hand;
