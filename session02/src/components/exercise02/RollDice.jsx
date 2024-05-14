import React, { Component } from "react";

import Button from "./MyButton";
import Die from "./Die";

export default class RollDice extends Component {
  constructor() {
    super();
    this.state = {
      dice1: "one",
      dice2: "six",
      status: "",
    };
    this.rollDiceClick = this.rollDiceClick.bind(this);
  }
  rollDiceClick() {
    const randomNumber1 = Math.floor(Math.random() * 6) + 1;
    const randomNumber2 = Math.floor(Math.random() * 6) + 1;
    const random = ["one", "two", "three", "four", "five", "six"];
    console.log(randomNumber1);
    setTimeout(() => {
      this.setState({ ...this.state, status: "" });
    }, 1000);
    this.setState({
      ...this.state,
      status: "shaking",
      dice1: random[randomNumber1 - 1],
      dice2: random[randomNumber2 - 1],
    });
  }
  render() {
    return (
      <div>
        <Die
          status={this.state.status}
          dice2={this.state.dice2}
          dice1={this.state.dice1}
        />
        <Button
          //   buttonValue={this.state.buttonValue}
          //   isDisabled={this.state.isDisabled}
          rollDiceClick={this.rollDiceClick}
        />
      </div>
    );
  }
}
