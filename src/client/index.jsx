import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './app';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import Provider from '../component/provider';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    combineReducers({
        router: routerReducer,
    }),
    applyMiddleware(middleware)
);
hydrate(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root')
)

