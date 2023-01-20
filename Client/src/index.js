import React from 'react';
import ReactDOM  from 'react-dom';
//keep trace of the store(global state), access that state from anywhere
import { Provider } from 'react-redux';
import{ createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers'; //takes in the current state and an action and return the next state

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)))
//connecting to the div with an id 'root'
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

