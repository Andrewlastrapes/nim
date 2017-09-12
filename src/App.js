import React, { Component } from 'react';
import logo from './logo.svg';
import Heap from "./Heap.js"
import Players from "./Players.js"
import './App.css';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      heap : 10,
      turn: "player1"
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Nim</h1>
          <Heap heap={this.state.heap}/> 
          <Players players={this.state.turn}/>

      </div>
    );
  }
}

export default App;
