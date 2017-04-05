import React, { Component } from 'react';

class CreateGame extends Component {
  render() {
    return (
      <div class="content">
        <input type="text" value="Game Name" />
        <input type="submit" value="submit" />
      </div>
    );
  }
}

export default CreateGame;