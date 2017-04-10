import React, { Component } from 'react';
import logo from './kwizzertLogo.png';
import { connect } from 'react-redux';

class Header extends Component {
    render() {
        return (
            <div className="header vertical-align">
                <div className="col-md-1">
                    <img src={logo} alt="Kwizzert" width="50px" height="50px" />
                </div>
                <div className="col-md-3">
                    <h3>{this.props.game.name}</h3>
                    <h4>{this.props.game.password}</h4>
                </div>
                <div className="col-md-4 align-center">
                    <h3>Round {this.props.game.roundNr}</h3>
                    <h4>Question {this.props.game.questionNr} of 3</h4>
                </div>
                <div className="col-md-4">
                    <button className="pull-right btn btn-default" onClick="">End Game</button>
                </div>
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

export default connect(mapStateToProps)(Header);