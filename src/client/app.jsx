import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const App= () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                {renderRoutes(routes)}
            </div>
        </Router>
    )
}

export default hot(module)(App);


