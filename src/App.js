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

     subtraction(){
      this.setState({heap: 3})
    }



  render() {
    return (
      <div className="App">
        <div>
          <h1>Nim</h1>
        </div>
        <div>
          <Heap heap={this.state.heap}/> 
         </div>
        <div>
          <Players players={this.state.turn}/>
          </div>
          <input type="text" />
          <button onClick={this.subtraction}>Take Away</button>
       



      </div>
    );
  }
}

export default App;
