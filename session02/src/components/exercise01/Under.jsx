import React, { Component } from 'react'

export default class Under extends Component {
    constructor(props){
        super(props)
    }
  render() {
    return (
      <div>
        Out of {this.props.count} flips, there have been heads {this.props.countHead} and tails {this.props.countTail}
      </div>
    )
  }
}
