import React, { Component } from 'react'

export default class SumNumber extends Component {
    constructor(){  
        super();
        this.state = {
            a: 3,
            b: 4,
            sum : (a,b)=>a+b
        }
    }
  render() {
    return (
      <div>
        Tổng của {this.state.a} và {this.state.b} là :{this.state.sum(this.state.a,this.state.b)}
      </div>
    )
  }
}
