import React from "react";
import ReactDOM from "react-dom";


class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  getCardImage() {
    if (this.props.card.isFaceUp) {
      return this.props.card.image;
    } else {
      return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcQv5fuQH1RDh5VjjZLzj8mH5EgCTo5ONZsV8U23DvbuHHJoht";
    }
  }

  render() {
    return `hi`;
  }
}

export default Card;
