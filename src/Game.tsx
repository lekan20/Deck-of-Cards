import React from "react";
import Hand from "./card-component/Hand";
import CardApi from "./api/cardApi.js";
import {CardType} from "./App";

interface GameState {
  deck: any;
  cards: CardType[];
}

interface GameProps {}

class Game extends React.Component<GameProps, GameState> {
  private myDeck: CardApi;

  constructor(props: GameProps) {
    super(props);

    this.state = {
      deck: null,
      cards: []
    };

    // Create an instance of the deck
    this.myDeck = new CardApi();
  }

  // call the cardApi from the lifecycle method
  componentDidMount() {
    this.myDeck
      .shuffleCards(1)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          deck: resp
        });
      });
  }

  // Draw your cards from the deck, place them one at a time, til you reach five
  dealCards = () => {
    if (this.state.cards.length === 5) {
      alert(
        "You can only drive five cards, please grab a new deck if you want to draw some more."
      );
      return;
    }

    this.myDeck
      .drawCards(this.state.deck.deck_id)
      .then(resp => resp.json())
      .then(resp => {
        let newCards = this.state.cards;
        newCards.push(resp.cards[0]);
        this.setState({
          cards: newCards
        });
      });
  };

  // Clear the card state and replace it with a new one
  newDeck = (): void => {
    this.setState({
      cards: []
    });
    this.myDeck
      .shuffleCards(1)
      .then(resp => resp.json())
      .then(resp => {
        this.setState({
          deck: resp
        });
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.dealCards}>Draw A Card</button>
        <button onClick={this.newDeck}>Grab a New Deck</button>
        <Hand cards={this.state.cards} />
      </div>
    );
  }
}

export default Game;
