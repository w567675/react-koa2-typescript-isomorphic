import React from 'react';
import { render } from 'react-dom';
import Loadable from 'react-loadable';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const loading = ({ error, pastDelay, retry }) => {
    if (error) {
        return <div>Error! <button onClick={retry}>Retry</button></div>;
    } else if (pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
    return <div>loading</div>
}

const Home = Loadable({
    loader: () => import('./home'),
    loading,
});

const About = Loadable({
    loader: () => import('./about'),
    loading,
});



const App = () => {
    return (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/about" component={About}></Route>
            </div>
        </Router>
    )
}

export default hot(module)(App);


