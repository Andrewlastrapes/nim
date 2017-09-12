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
    clickHandler(){

      this.setState({
        heap: 5,
        turn: "player2"
      });

    
    

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
          <input type="text"/>
          <button type="submit" onClick={this.clickHandler.bind(this)}>Take Away</button>
       



      </div>
    );
  }
}

export default App;
