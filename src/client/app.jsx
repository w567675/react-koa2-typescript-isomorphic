import React from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route, Link , withRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';
class App extends React.Component{
    constructor(props) {
        super(props);
    }
    click = (path) => {
        this.props.history.push(path)
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => { this.click('/')}}>home</li>
                    <li onClick={() => { this.click('/about')}}>About</li>
                </ul>
                {renderRoutes(routes)}
            </div>
        )
    }
}

export default withRouter(App);


