import React, { Component } from "react";

export default class Die extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {console.log(this.props.dice1)}
        {console.log(this.props.dice2)}
        <i
          className={`fa-solid fa-dice-${this.props.dice1} ${this.props.status}`}
        />
        <i
          className={`fa-solid fa-dice-${this.props.dice2} ${this.props.status}`}
        />
      </div>
    );
  }
}
