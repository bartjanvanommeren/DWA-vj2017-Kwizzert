import React, { Component } from 'react';

class CreateGame extends Component {
  render() {
    return (
      <div className="content">
        <label className="">Game name</label>
        <input type="text" />
        <br/>
        <button className="btn btn-default" onClick="">Start game</button>
      </div>
    );
  }
}

export default CreateGame;