import React, { Component } from 'react';

// Components
import Header from './header';
import CreateGame from './createGame';
import GameSetup from './gameSetup';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Header />
                <CreateGame />
                <GameSetup />
            </div>
        );
    }
}

export default App;