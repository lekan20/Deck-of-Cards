import React from "react";

const deck =
{
    "success": true,
    "cards": [
        {
            "image": "https://deckofcardsapi.com/static/img/KH.png",
            "value": "KING",
            "suit": "HEARTS",
            "code": "KH"
        }
    ],
    "deck_id":"3p40paa87x90",
    "remaining": 51
}

class Game extends React.Component {
  constructor(props) {
      super(props)

      this.state = {
        deck: []
      }
  }

    componentDidMount(){
      this.setState({
        deck: deck
      })
  }
    getCards = () => {
      let cards = [];
      this.props.cards.forEach(card => {
        cards.push(
          <Card card={card} />
        )
      })
      return (
        cards
      )
    };

  render() {
    return (
        this.getCards()
    )
  }
}

class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return  {props.card.image} ;
  }
}

export default Game;
