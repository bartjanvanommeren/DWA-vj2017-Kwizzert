import React, { Component } from 'react';
import logo from './kwizzertLogo.png';

class Header extends Component {
    render() {
        return (
            <div className="header vertical-align">
                <div className="col-md-1">
                    <img src={logo} alt="Kwizzert" width="50px" height="50px" />
                </div>
                <div className="col-md-3">
                    <h3>Game Name</h3>
                    <h4>Password</h4>
                </div>
                <div className="col-md-4 align-center">
                    <h3>Round 1</h3>
                    <h4>Question 1 of 1</h4>
                </div>
                <div className="col-md-4">
                    <button className="pull-right btn btn-default" onClick="">End Game</button>
                </div>
            </div>
        );
    }
}

export default Header;