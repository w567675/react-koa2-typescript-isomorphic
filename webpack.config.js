const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
	module: {
		rules: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			options: {
				presets: ['env', 'react'],
				plugins: [
					'syntax-dynamic-import',
					'react-hot-loader/babel',
					["transform-runtime", {
						"polyfill": false,
						"regenerator": true
					}]
				]
			}
		}, {
			test: /\.css$/,
			use: [
				MiniCssExtractPlugin.loader,
				'css-loader',
			]
		}]
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
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'cheap-module-eval-source-map',
	mode: 'development'
}