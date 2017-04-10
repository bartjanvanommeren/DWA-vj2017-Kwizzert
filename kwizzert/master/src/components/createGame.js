import React, { Component } from 'react';
import { connect } from 'react-redux';

class CreateGame extends Component {
  render() {
    return (
      <div className="content">
        <label>Game name</label>
        <input type="text" defaultValue={this.props.game.name} />
        <br />
        <button className="btn btn-default" onClick="">Start game</button>
      </div>
    );
  }
}

// Below all part of the export, connect is used to make Header aware of the global game object
function mapStateToProps(state) {
  return {
    game: state.game
  };
}

export default connect(mapStateToProps)(CreateGame);
//export default CreateGame;