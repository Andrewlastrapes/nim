import React, { Component } from 'react';
import logo from './logo.svg';


class Players extends Component {


  render() {
    return (
      <div className="Players">
        
        {this.props.players}  

      </div>
    );
  }
}

export default Players;
