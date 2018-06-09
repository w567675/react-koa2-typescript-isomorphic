



import Koa from 'koa';
import views from 'koa-views';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import asyncMatchRoutes from '../util/asyncMatchRoutes';
import routes from '../routes';
import createStore from '../redux/createStore';
import Provider from '../component/provider';
import { ConnectedRouter } from 'react-router-redux';
import createMemoryHistory from 'history/createMemoryHistory';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable/webpack'
import loadablejson from '../../dist/react-loadable.json';
import { devMiddleware, hotMiddleware } from 'koa-webpack-middleware';
import Html from '../component/Html';

import webpackConfig from '../../webpack/webpack.config.server.babel';
import webpack from 'webpack';

console.log(config)

const compile = webpack(webpackConfig);

export default async () => {
    const app = new Koa();
    app.use(devMiddleware(compile, {
        // display no info to console (only warnings and errors)
        noInfo: false,

        // display nothing to the console
        quiet: false,

        // switch into lazy mode
        // that means no watching, but recompilation on every request
        lazy: true,

        // watch options (only lazy: false)
        watchOptions: {
            aggregateTimeout: 300,
            poll: true
        },

        // public path to bind the middleware to
        // use the same as in webpack
        publicPath: webpackConfig.output.publicPath,

        // custom headers
        headers: { "X-Custom-Header": "yes" },

        // options for formating the statistics
        stats: {
            colors: true
        }
    }));

    app.use(hotMiddleware(compile, {
        // log: console.log,
        // path: '/__webpack_hmr',
        // heartbeat: 10 * 1000
    }));

    app.use(async (ctx) => {
        const {
            originalUrl
        } = ctx;
        const history = createMemoryHistory({ initialEntries: [originalUrl] });
        const { components } = asyncMatchRoutes(routes, originalUrl);

        const store = createStore({ history });
        const modules = [];
        const component = (
            <Loadable.Capture report={(moduleName) => modules.push(moduleName)}>
                <Provider store={store}>
                    <ConnectedRouter history={history}>
                        <StaticRouter location={originalUrl} >
                            {renderRoutes(routes)}
                        </StaticRouter>
                    </ConnectedRouter>
                </Provider>
            </Loadable.Capture>
        );
        const content = ReactDOMServer.renderToString(component);
        const bundles = getBundles(loadablejson, modules);
        console.log(bundles)
        ctx.body = ReactDOMServer.renderToString(<Html bundles={bundles} content={content} />)
    });
    await Loadable.preloadAll();
    app.listen(3000, () => {
        console.log('Running on http://localhost:3000/');
    });

}


