import React, { Component } from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.countClick}>FLIP MEEEE</button>
      </div>
    );
  }
}
