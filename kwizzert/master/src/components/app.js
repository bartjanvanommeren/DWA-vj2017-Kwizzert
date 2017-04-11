import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';
import PageController from './pageController';
import CreateGame from './createGame';

class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <div className="container">
                    <Route path="/" component={CreateGame} />
                    <Route path="/gameID" component={PageController} />
                </div>
            </Router>
        );
    }
}

export default App;