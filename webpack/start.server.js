import startServer from 'universal-webpack/server';
import settings from './universal-webpack-settings';
// `configuration.context` and `configuration.output.path` are used
import configuration from './webpack.config.babel';

startServer(configuration, settings)