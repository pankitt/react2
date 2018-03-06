import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import { Route, Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import reducer from './reducers';


/*const initialState = {
    tracks: [
        'Rock track',
        'Metall track'
    ],
    playlists: [
        'rock',
        'rap',
        'popsa'
    ]
};

export function playlist(state = initialState, action) {
    if(action.type === 'ADD_TRACK') {
        return {
            ...state,
            tracks: [ ...state.tracks, action.payload ]
        }
    }
    return state;
}*/


//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
const newHistory = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={newHistory}>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();