import React, { Component } from "react";

export default class MyButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: false,
    };
    this.handleDisabled = this.handleDisabled.bind(this);
  }

  handleDisabled() {
    // console.log(this.props.rollDiceClick);
    this.props.rollDiceClick();
    setTimeout(() => {
      this.setState({ ...this.state, isDisabled: false });
    }, 1000);
    this.setState({ ...this.state, isDisabled: true });
  }

  render() {
    return (
      <div>
        <button disabled={this.state.isDisabled} onClick={this.handleDisabled}>
          {this.state.isDisabled ? "Rolling" : "Roll Dice"}
        </button>
      </div>
    );
  }
}
