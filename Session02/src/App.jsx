import "./App.css";

import { Component, useState } from "react";

import Button from "./components/exercise01/Button";
import Die from "./components/exercise02/Die";
import MyImage from "./components/exercise01/MyImage";
import RollDice from "./components/exercise02/RollDice";
import Top from "./components/exercise01/Top";
import Under from "./components/exercise01/Under";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countHead: 0,
      countTail: 0,
      count: 0,
      coin: "",
      style: "",
    };
    this.countClick = this.countClick.bind(this);
  }

  countClick() {
    let randomNumber = Math.floor(Math.random() * 2) + 1;
    console.log("number", randomNumber);
    if (randomNumber === 1) {
      this.setState({
        ...this.state,
        countHead: this.state.countHead + 1,
        count: this.state.count + 1,
        coin: "https://i.pcgs.com/s3/cu-pcgs/Photograde/500/GldEag-69o.jpg",
      });
    }
    if (randomNumber === 2) {
      this.setState({
        ...this.state,
        countTail: this.state.countTail + 1,
        count: this.state.count + 1,
        coin: "https://i.pcgs.com/s3/cu-pcgs/Photograde/500/GldEag-69r.jpg",
      });
    }
  }
  render() {
    return (
      <>
        {/* <Top />
        <MyImage coin={this.state.coin} />
        <Button countClick={this.countClick} />
        <Under
          count={this.state.count}
          countHead={this.state.countHead}
          countTail={this.state.countTail}
        /> */}
        <RollDice />
      </>
    );
  }
}
