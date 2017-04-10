import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class CreateGame extends Component {
    teamsJoining() {
        return this.props.game.teams.map((team, i) => {
            return (
                <tr
                    className={team.accepted}
                    key={i}
                    onClick={() => this.props.acceptTeam(i)}
                >
                    <td>{team.name}</td>
                </tr>
            );
        });
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
                {this.props.game.test}
                <br />
                <button className="btn btn-default" onClick="">Next</button>
            </div>
        );
    }
}

// Action creator
function acceptTeam(i) {
    return { // Action object
        type: "TOGGLE_TEAM_ACCEPTED",
        payload: i
    }
    // expected behavior
    // game.teams[id].accepted = !game.teams[id].accepted;
    // also needs to contact server
}

// make component aware of game store
function mapStateToProps(state) {
    return {
        game: state.game
    };
}

// make component aware of actions
function matchDispatchToProps(dispatch) {
    return bindActionCreators({ acceptTeam: acceptTeam }, dispatch)
}

// make component aware of game object and export
export default connect(mapStateToProps, matchDispatchToProps)(CreateGame);
//export default CreateGame;