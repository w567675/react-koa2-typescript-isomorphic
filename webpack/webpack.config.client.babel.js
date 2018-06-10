import { client } from 'universal-webpack/config'
import settings from './universal-webpack-settings.json'
import configuration from './webpack.config.babel'

const config =  client(configuration, settings, { development: false, useMiniCssExtractPlugin: true })


config.output.publicPath =  '//127.0.0.1:3001/';

export default config
