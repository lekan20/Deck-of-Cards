import React from "react";
import ReactDOM from "react-dom";


class Card extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <div>{this.props.suit}</div>
    );
  }
}

export default Card;
