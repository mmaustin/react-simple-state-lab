import React, { Component } from 'react';

export default class Cell extends Component {

    constructor(props){
        super();
        this.state = {
            color: props.value,
        };
    }

    newColor = () => {
        let color2 = "#333";
        this.setState({
            color: color2,
        });
    }

    render() {
        return <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.newColor}></div>
    }

}

/*
class MyComp extends React.Component {
  // we use the constructor to set the INITIAL STATE
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  // our increment method makes use of the 'setState' method, which is what we use to alter state
  increment = () => {
    const newCount = this.state.count + 1;
    this.setState({
      count: newCount,
    });
  };

  render() {
    return <div onClick={this.increment}>{this.state.count}</div>;
  }
}
*/