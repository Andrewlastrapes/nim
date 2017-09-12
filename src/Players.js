import React, { Component } from 'react';



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
