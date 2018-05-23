import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ReactLoadablePlugin } from 'react-loadable/webpack';
import WebpackisomorphicToolsPlugin from 'webpack-isomorphic-tools/plugin';
import webpackIsomorphicToolsConfig from './webpack/webpack-isomorphic-tools-config';

const webpackisomorphicToolsPlugin = new WebpackisomorphicToolsPlugin(webpackIsomorphicToolsConfig)

export default {
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {

				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
				]
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
		extensions: ['.js', '.jsx',],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'test',
			template: 'src/template/index.html',
		}),
		new MiniCssExtractPlugin({
			filename: "[name].[chunkhash].css",
			chunkFilename: "[id].[chunkhash].css"
		}),
		new ReactLoadablePlugin({
			filename: './dist/react-loadable.json',
		}),
		webpackisomorphicToolsPlugin.development(),
	],
	optimization: {
		runtimeChunk: {
			name: "manifest"
		},
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: "vendors",
					priority: -20,
					chunks: "all"
				},
				// styles: {
				// 	name: 'styles',
				// 	test: /\.css$/,
				// 	chunks: 'all',
				// 	minChunks: 2,
				// },
				styles: {
					test: /\.css$/,
					chunks: 'all',
					minChunks: 2,
					enforce: true
				}
			}
		}
	},
	entry: {
		index: './src/client/index.jsx',
	},
	output: {
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/',
	},
	devtool: 'cheap-module-eval-source-map',
	mode: 'development'
}