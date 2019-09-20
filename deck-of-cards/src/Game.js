import React from "react";
import Hand from "./card-component/Hand";
import CardApi from "./api/cardApi.js"


class Game extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      deck: null,
      cards: []
    }

        // Create an instance of the deck
      this.myDeck = new CardApi();
    }


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

    dealCards = () => {
      this.myDeck.drawCards(this.state.deck.deck_id)
      .then((resp) => resp.json())
      .then((resp) => {
        let newCards = this.state.cards;
        newCards.push(resp.cards[0])
        this.setState({
          cards: newCards
        });
      })
    }




  render() {
    // return this.state.deck ? <Hand cards={this.state.cards} />: '';
    return (<div>
      <button onClick={this.dealCards}>
      Draw Card
    </button>
      <Hand cards={this.state.cards} />
    </div>)
  }
}

export default Game;
