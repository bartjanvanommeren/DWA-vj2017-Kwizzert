import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import Header from './components/header';
import Content from './components/createGame';

// Redux stuff
import { createStore, combineReducers } from 'redux';
import GameReducer from './reducers/reducer-game';

const allReducers = combineReducers({
  game: GameReducer // For now this reducer holds everything considered usefull for all clients
});

const store = createStore(allReducers);


// TODO make app component that glues tgt the page and maybe eliminates routing
// https://youtu.be/ZRE6e_0eQeQ?t=1m39s
ReactDOM.render(
  <div className="container">
    <Header />
    <Content />
  </div>,
  document.getElementById('root')
);
