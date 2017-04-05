import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div class="header">
                <img src="" alt="Kwizzert" />
                <div class="header-left">
                    <h1>Game Name</h1>
                    <h2>Password</h2>
                </div>
                <div class="header-center">
                    <h1>Round 1</h1>
                    <h2>Question 1 of 1</h2>
                </div>
                <div class="header-right">
                    <button onclick="">End Game</button>
                </div>
            </div>
        );
    }
}

export default Header;