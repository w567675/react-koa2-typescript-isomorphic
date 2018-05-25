import React from 'react';
import { render, hydrate } from 'react-dom';
import App from './app';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter} from 'react-router-redux';
import Provider from '../component/provider';
import { ReduxAsyncConnect } from  '../component';
import './about.css';
const history = createBrowserHistory();
const store = createStore({history});
render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <ReduxAsyncConnect history={history} location={history.location.pathname} >
                <App />
            </ReduxAsyncConnect>
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('root')
)

