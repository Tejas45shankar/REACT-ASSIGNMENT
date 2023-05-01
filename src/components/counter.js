import React, { Component } from "react";

class Counter extends Component {
  state = {
    title: "Counter",
    Count: 0,
  };

  //constructor() {
//super()

//this.handledecrement=this.handledecrement.bind(this);
//this.handleincrement=this.handleincrement.bind(this);

  //}

  render() {
    return (
      <div className="container m-5">
        <h2 className="text-primary">{this.state.title}</h2>
        <button className="btn btn-danger m-4" onClick={this.handledecrement}>-</button>
        <span>{this.state.Count}</span>
        <button className="btn btn-success m-4" onClick={this.handleincrement}>+</button>
      </div>
    );
  }

  handledecrement=() => {
this.setState({Count: this.state.Count-1});
  }

  handleincrement=()=> {
    this.setState({Count: this.state.Count+1});
  }
}

export default Counter;
