import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class GameSetup extends Component {
    constructor(props) {
    super(props);
    this.state = {}

    this.nextState = this.nextState.bind(this);
  }

    teamsJoining() {
        return this.props.game.teams.map((team, i) => {
            return (
                <tr key={i}>
                    <td>{team.name}</td>
                    <td>
                        <input
                            type="checkbox"
                            value={team.accepted}
                            onClick={() => this.props.acceptTeam(i)}
                        />
                    </td>
                </tr>
            );
        });
    }

    nextState() {
        this.props.nextState();
        // Expected Behavior
        // this.props.game.gameState ++;
        // console.log(this.props.game.gameState);
    }

    render() {
        return (
            <div className="content">
                <label>Game name</label>
                <br />
                <table className="table">
                    <tbody>
                        {this.teamsJoining()}
                    </tbody>
                </table>
                <br />
                <button className="btn btn-default" onClick={this.nextState}>Next</button>
            </div>
        );
    }
}

// Action creator
function nextState() {
    return {
        type: "NEXT_STATE"
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
    return bindActionCreators({ nextState: nextState }, dispatch)
}

// make component aware of game object and export
export default connect(mapStateToProps, matchDispatchToProps)(GameSetup);