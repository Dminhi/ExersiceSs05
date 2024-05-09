import React, { Component } from 'react'

export default class Datetime extends Component {
    constructor(){
        super();
        this.state = {
           date : new Date()
        }
    }
  render() {
    const timeString = this.state.date.toLocaleTimeString('vi-VN', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
    return (
      <div>
        <h1>Xin chào các bạn!</h1>
        <h2>Bây giờ là {timeString}</h2>
      </div>
    )
  }
}
