import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Provider from '../component/provider';
import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const history = createBrowserHistory();
const middleware = routerMiddleware(history);
const store = createStore(
    combineReducers({
        router: routerReducer,
    }),
    applyMiddleware(middleware)
);

// const loading = ({ error, pastDelay, retry }) => {
//     if (error) {
//         return <div>Error! <button onClick={retry}>Retry</button></div>;
//     } else if (pastDelay) {
//         return <div>Loading...</div>;
//     } else {
//         return null;
//     }
//     return <div>loading</div>
// }

// const Home = Loadable({
//     loader: () => import('./home'),
//     loading,
// });

// const About = Loadable({
//     loader: () => import('./about'),
//     loading,
// });



const App = () => {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/">index</Link></li>
                            <li><Link to="/home/111">home</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                        {renderRoutes(routes)}
                    </div>
                </Router>
            </ConnectedRouter>
        </Provider>
    )
}

export default hot(module)(App);


