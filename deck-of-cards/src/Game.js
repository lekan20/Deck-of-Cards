import React from "react";

const card =
{
  "image": "https://deckofcardsapi.com/static/img/KH.png",
  "value": "KING",
  "suit": "HEARTS",
  "code": "KH"
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

    const playingDeck = this.state.playingDeck.map(card => console.loge(card) )

    return
  }
}

export default Game;
