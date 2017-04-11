import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class CreateGame extends Component {
  constructor(props) {
    super(props);
    this.state = { gameName: "" }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ gameName: event.target.value });
  }

  handleSubmit() {
    console.log("component" + this.state.gameName);
    this.props.changeGameName(this.state.gameName);
  }

  render() {
    return (
      <div className="content">
        <label>Game name</label>
        <input type="text" defaultValue={this.props.game.name} onChange={this.handleChange} />
        <br />
        <button 
          className="btn btn-default" 
          onClick={this.handleSubmit}
        >
          <Link to="/gameID">Start Game</Link>
        </button>
      </div>
    );
  }
}

// Action creator
function changeGameName(name) {
    return { // Action object
        type: "CHANGE_GAME_NAME",
        payload: name
    }
}

// make component aware of game store
function mapStateToProps(state) {
  return {
    game: state.game
  };
}

// make component aware of actions
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ changeGameName: changeGameName }, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(CreateGame);
//export default CreateGame;