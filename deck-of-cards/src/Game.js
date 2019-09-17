import React from "react";
import Card from "./Card";

const card =
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

class Game extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        playingDeck: []
      }
  }

    componentDidMount(){
      this.setState({
        playingDeck: card
      })
  }

  render() {

    return <Card />
  }
}

export default Game;
