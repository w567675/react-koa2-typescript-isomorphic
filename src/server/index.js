
require('ts-node').register();
const http = require('http');
const https = require('https');
const path = require('path');
const views = require('koa-views');
const app = require('./app').default;
const router = require('./routes').default;
const clientRoute = require('./middleware/clientRoute').default;

/**
 * view
 */
app.use(views(path.resolve(__dirname, './views'), {map: {html: 'ejs'}}));

/**
 * match route
 */
app.use(clientRoute);

/**
 * server router
 */
app.use(router.routes(), router.allowedMethods());

/**
 * start app 
 */
http.createServer(app.callback()).listen(1000);
https.createServer(app.callback()).listen(1001);

