import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { ReactLoadablePlugin } from 'react-loadable/webpack';
import WebpackChunkAssets from './plugins/webpack-chunk-assets';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import config from './config'

const {
	assetsPath,
	outPutDir,
} = config;
export default {
	entry: {
		index: './src/client/index.jsx',
	},
	output: {
		filename: '[name].[hash].js',
		chunkFilename: '[name].[hash].js',
		path: outPutDir,
		publicPath: assetsPath,
	},
	devtool: 'cheap-module-eval-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(j|t)sx?$/,
				exclude: /node_modules/,
				loader: 'ts-loader',
				options: {
					configFile: 'tsconfig.client.json'
				}
			},
			{
				test: /\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: "css-loader",
					},
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
		extensions: ['.js', '.jsx', '.ts', '.tsx'],
	},
	plugins: [
		new CleanWebpackPlugin(['dist'], {root: path.resolve(__dirname, '../') ,}),
		new HtmlWebpackPlugin({
			title: 'test',
			template: 'src/template/index.html',
		}),
		new WebpackChunkAssets(),
		new MiniCssExtractPlugin({
			filename: "[name].[chunkhash].css",
			chunkFilename: "[id].[chunkhash].css"
		}),
		new ReactLoadablePlugin({
			filename: './dist/react-loadable.json',
		}),
		// webpackisomorphicToolsPlugin.development(),
		// assetsPluginInstance,
		// y

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
				styles: {
					test: /\.css$/,
					chunks: 'all',
					minChunks: 2,
					enforce: true
				}
			}
		}
	},
}