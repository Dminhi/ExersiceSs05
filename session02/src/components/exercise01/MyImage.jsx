import React, { Component } from "react";

export default class MyImage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{ display: this.props.coin == "" ? "none" : "block" }}>
        <img width="300" height="200" src={this.props.coin} alt="" />
      </div>
    );
  }
}
