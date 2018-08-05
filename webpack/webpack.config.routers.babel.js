import path from 'path';
import nodeExternals  from 'webpack-node-externals';
import config from './config'
const {
	routesOutPutDir,
} = config;
export default {
	target: "node",
	externals: [nodeExternals()],
	entry: {
		index: './src/routes/index.js',
	},
	output: {
		filename: '[name].js',
		path: routesOutPutDir,
		libraryTarget: "commonjs2"
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				loader: 'css-loader/locals'
			},
			{
				test: /\.(jpeg|jpg|png|gif)$/,
				loader: 'url-loader',
				options: {
					limit: 10240,
				},
			},

		],
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	
	devtool: 'source-map',
	mode: 'development'
}