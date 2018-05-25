import createBrowserHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';



export default ({ history }) => {
    const middleware = routerMiddleware(history);
    const store = createStore(
        combineReducers({
            router: routerReducer,
        }),
        applyMiddleware(middleware)
    );
    return store;
}