import React from "react";
import Hand from "./card-component/Hand";

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
  state = {
    playingDeck: []
  }

  componentDidMount() {
    this.setState({
      playingDeck: hand
    })
  }

  render() {
    return <Hand deck={this.state.playingDeck} />
  }
}

export default Game;
