import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// Components
import App from './components/app';

// Redux stuff
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import GameReducer from './reducers/reducer-game';

const allReducers = combineReducers({
  game: GameReducer // For now this reducer holds everything considered usefull for all clients
});

const myStore = createStore(allReducers);

// Don't touch, use components/app.js
ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);
