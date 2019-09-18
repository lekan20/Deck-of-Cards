import React from "react";
import Hand from "./card-component/Hand";
import CardApi from "./api/cardApi.js"

const hand = [
  {
    "success": true,
    "cards": [
      {
          "image": "https://deckofcardsapi.com/static/img/KH.png",
          "value": "KING",
          "suit": "HEARTS",
          "code": "KH"
      },
      {
          "image": "https://deckofcardsapi.com/static/img/8C.png",
          "value": "8",
          "suit": "CLUBS",
          "code": "8C"
      }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 50
  }
]


class Game extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      playingDeck: []
    }

    // Create an instance of the deck
  this.myDeck = new CardApi();

  this.myDeck
    .shuffleCards(6)
    .then(resp => resp.json())
    .then(resp => {
      this.deck = resp;
    });
  }

  componentDidMount() {
    this.setState({
      playingDeck: hand
    })
  }

  render() {
    console.log(this.myDeck)
    return <Hand />
  }
}

export default Game;
