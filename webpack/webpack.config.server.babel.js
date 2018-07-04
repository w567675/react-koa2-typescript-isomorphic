import path from 'path';
import nodeExternals  from 'webpack-node-externals';
import config from './config'
const {
	outPutDir,
} = config;
export default {
	target: "node",
	externals: [nodeExternals()],
	entry: {
		server: './src/server/index.js',
	},
	output: {
		filename: '[name].[hash].js',
		path: path.resolve(process.cwd(), 'dist'),
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
	output: {
		filename: '[name].js',
		path: outPutDir,
		libraryTarget: "commonjs2"
	},
	devtool: 'source-map',
	mode: 'development'
}