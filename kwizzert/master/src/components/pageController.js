import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Header from './header';
import GameSetup from './gameSetup';

class PageController extends Component {
    checkGameState() {
        switch (this.props.game.gameState) {
            case 1:
                return <GameSetup/>;
                break;

            default:
                return "";
                break;
        }
    }
    render() {
        return (
            <div>
                <Header />
                {this.checkGameState()}
            </div>
        );
    }
}

// make component aware of game store
function mapStateToProps(state) {
    return {
        game: state.game
    };
}

// make component aware of game object and export
export default connect(mapStateToProps)(PageController);