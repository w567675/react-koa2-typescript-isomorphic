import { client } from 'universal-webpack/config'
import settings from './universal-webpack-settings'
import configuration from './webpack.config.babel'

const config =  client(configuration, settings, { development: false, useMiniCssExtractPlugin: true })
console.log(JSON.stringify(config.module.rules[1]))
export default config
