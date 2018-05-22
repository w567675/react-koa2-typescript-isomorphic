import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';



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
        <Router>
            <div>
                <ul>
                    <li><Link to="/">index</Link></li>
                    <li><Link to="/home">home</Link></li>
                    <li><Link to="/child/12">child</Link></li>
                    <li><Link to="/child/12/grand-child">grandChild</Link></li>
                    <li><Link to="/child/12/grand-child2">child</Link></li>
                </ul>
                {renderRoutes(routes)}
            </div>
        </Router>
    )
}

export default hot(module)(App);


